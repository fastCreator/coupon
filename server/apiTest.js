/**
 * Module dependencies.
 */

ApiClient = require('./index.js').ApiClient

const client = new ApiClient({
    'appkey': '24884330',
    'appsecret': 'bac78cb1d551fbcfd517b8e10d6c310d',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
})

client.execute('taobao.tbk.ju.tqg.get', {
    'adzone_id': 'mm_131778178_45276106_521066509',
    'fields': 'click_url,pic_url,reserve_price,zk_final_price,total_amount,sold_num,title,category_name,start_time,end_time',
    'start_time': '2016-08-09 09:00:00',
    'end_time': '2016-08-09 16:00:00',
    'page_no': '1',
    'page_size': '40'
}, function (error, response) {
    if (!error) console.log(response)
    else console.log(error)
})
