const data = [
    {'imgurl': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1688600627,112409843&fm=27&gp=0.jpg', 'type': '0', 'keyword': '水果'}
]
module.exports = async (ctx, next) => {
    ctx.body = data
}
