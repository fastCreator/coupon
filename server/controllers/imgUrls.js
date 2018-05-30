const data = [
    {'imgurl': 'http://img4.imgtn.bdimg.com/it/u=4176539679,2071232867&fm=200&gp=0.jpg', 'type': '0', 'keyword': '水果'}
]
module.exports = async (ctx, next) => {
    ctx.body = data
}
