const data = [
    {
        img: 'http://gtms04.alicdn.com/tps/i4/TB1zBf8LFXXXXaAaXXXQO4D5VXX-440-180.jpg',
        clip: {
            title: '天猫精选-品牌惠聚',
            kl: '￥yVAt0FqlHZx￥',
            dlj: 'https://s.click.taobao.com/EauDcQw'
        }
    },
    {
        img: 'https://img.alicdn.com/tfs/TB101ZQdgoQMeJjy0FnXXb8gFXa-440-180.jpg',
        clip: {
            title: '天猫必抢',
            kl: '￥XMqv0Fqm74x￥',
            dlj: 'https://s.click.taobao.com/HWYDcQw'
        }
    },
    {
        img: 'https://gw.alicdn.com/tfs/TB1KE6rkwoQMeJjy1XaXXcSsFXa-440-180.jpg',
        clip: {
            title: '精选淘宝/天猫最热门优惠券',
            kl: '￥QzLp0FqnZkS￥',
            dlj: 'https://s.click.taobao.com/uv7DcQw'
        }
    },
    {
        img: 'https://gw.alicdn.com/tfs/TB1EfElgWagSKJjy0FgXXcRqFXa-440-180.jpg',
        clip: {
            title: '爱淘宝',
            kl: '￥RXge0FqnGUK￥',
            dlj: 'https://s.click.taobao.com/JnuCcQw'
        }
    }
]
module.exports = async (ctx, next) => {
    ctx.body = data
}
