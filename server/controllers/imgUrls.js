const data = [
    {'imgurl': 'http://img3.imgtn.bdimg.com/it/u=3234383353,1941559374&fm=200&gp=0.jpg', 'type': '0', 'keyword': '水果'}
]
module.exports = async (ctx, next) => {
    ctx.body = data
}
