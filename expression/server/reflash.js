const superagent = require('superagent')
const cheerio = require('cheerio');
const async = require('async')
const phantom = require('phantom');

const url = 'http://www.doutula.com/article/list/?page='

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'gz-cdb-2q8ua6o0.sql.tencentcdb.com',
    port: '62925',
    user: 'root',
    password: 'Zg26220062',
    database: 'expressionbk'
  }
});
const urls = []
// 561
for(let i=1;i<=561;i++){
  urls.push(i)
}


async.mapLimit(urls, 10, async function(index) {
  await getPage(index)
  console.log('success_page:',index)
}, (err, results) => {
  if (err) throw err
  console.error(results,index)
})

// getPage(561)

async function getPage(index) {
  return new Promise((resolve, reject) => {
    let urls = []
    superagent.get(url + index).end(async (err, res) => {
      const $ = cheerio.load(res.text);
      $('.list-group-item.random_list').each(function (i, elem) {
        urls.push(elem.attribs.href)
      });
      urls.length = 1
      const instance = await phantom.create(['--load-images=no']);
      for (let i = 0; i < urls.length; i++) {
        await addData(instance, urls[i], index)
      }
      await instance.exit();
      resolve(url)
    })
  })
}

async function addData(instance, url, i) {
  url = url.replace('http://', 'https://')
  let obj = {}
  const page = await instance.createPage();
  // await page.on('onResourceRequested', function(requestData) {
  // console.info('Requesting', requestData.url);
  // });
  const status = await page.open(url);
  const content = await page.property('content');
  const $ = cheerio.load(content);
  let imgs = []
  obj.title = $('body > div.container_ > div.container > div > div.col-sm-9 > li > div.pic-title > h1 > a').text()
  let $content = $('body > div.container_ > div.container > div > div.col-sm-9 > li > div.pic-content')
  $content.find('div > table > tbody > tr:nth-child(1) > td > a > img').each(function (i, elem) {
    imgs.push(elem.attribs.src)
  })
  obj.url = imgs + '',
    obj.id = i
  await knex('expression').insert(obj)
} 