const data = [
  {
    img: "http://alp.alicdn.com/1476310476060.png",
    clip: {
      title: '大咖推荐折扣商品',
      kl: '￥ZeV80udd5Ki￥',
      dlj: 'https://s.click.taobao.com/UQ5zvQw'
    }
  },
  {
    img: "https://img.alicdn.com/tfs/TB14dbgbuOSBuNjy0FdXXbDnVXa-440-180.png",
    clip: {
      title: '淘宝新人福利社',
      kl: '￥cpxX0udXJSk￥',
      dlj: 'https://s.click.taobao.com/sDIzvQw'
    }
  },
  {
    img: "https://img.alicdn.com/tfs/TB1xL0domBYBeNjy0FeXXbnmFXa-440-180.jpg",
    clip: {
      title: '天猫新人福利社',
      kl: '￥NpsW0udXwEs￥',
      dlj: 'https://s.click.taobao.com/fpDzvQw'
    }
  },
  {
    img: "https://img.alicdn.com/tfs/TB11PbrpxSYBuNjSspjXXX73VXa-611-253.png",
    clip: {
      title: '支付宝新人福利社',
      kl: '￥mn8M0ud2TCB￥',
      dlj: 'https://s.click.taobao.com/dW9zvQw'
    }
  }
]
module.exports = async (ctx, next) => {
  ctx.body = data 
}
