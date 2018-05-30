const data = [
    {'imgurl': 'https://img.alicdn.com/tfscom/i4/2128793927/TB24Hw_qHSYBuNjSspiXXXNzpXa_!!2128793927-0-item_pic.jpg_310x310.jpg', 'type': '0', 'keyword': '水果'}
]
module.exports = async (ctx, next) => {
    ctx.body = data
}
