<template>
  <div class="page-detils">
    <img class="imghead" :src="data.pict_url" mode="widthFix" />
    <div class="title">{{data.title}}</div>
    <div class="item1 ltr">
      <div class="price">￥{{data.zk_final_price}}</div>
      <div class="numb">销量：{{data.volume}}</div>
    </div>
    <div class="imgList">
      <img v-for="(src,i) in data.small_images.string" :key="i" :src="src" mode="widthFix" />
    </div>
    <div class="fix-buttom">
      <div class="it1 iconfont icon-home_light" bindtap='gohome'>首页</div>
      <div class="it1 iconfont icon-share1" bindtap='share'>分享</div>
      <div class="it2 copyText" @click='buy' :data-clipboard-text="copyText" data-clipboard-action="copy">
        领券购买
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      num_iid: this.$route.query.num_iid,
      coupon_click_url: this.$route.query.coupon_click_url,
      coupon_id: this.$route.query.coupon_id,
      data: {},
      copyText: ''
    }
  },
  async created () {
    await this.getData()
    await this.copy()
  },
  computed: {
    url () {
      let url = ''
      if (this.coupon_click_url) {
        url = this.coupon_click_url
      } else if (this.coupon_id) {
        url = `https://uland.taobao.com/coupon/edetail?activityId=${
          this.coupon_id
        }&itemId=${this.num_iid}&src=pgy_pgyqf`
      } else {
        url = `https://item.taobao.com/item.htm?id=${this.num_iid}`
      }
      const PID = 'mm_131778178_45276106_534348035'
      return url + `&pid=${PID}`
    },
    scheme () {
      return (
        'taobao://' + this.url.replace('https://', '').replace('http://', '')
      )
    }
  },
  mounted () {

  },
  methods: {
    async copy () {
      if (utils.is_weixn()) {
        let model = (await utils.tbk('taobao.tbk.tpwd.create', {
          user_id: '87491795',
          text: this.data.title,
          url: this.url,
          logo: this.data.pict_url
        })).data.data.model
        this.copyText = `
        ${this.data.title}
        促销价:${this.data.zk_final_price}
        淘口令:${model}元
        抢购：${this.url}
        `
        var clipboard = new window.ClipboardJS('.copyText')
        clipboard.on('success', (e) => {
          MessageBox.alert(
            '打开手机淘宝APP,即可进入优惠券领取页面',
            '口令复制成功'
          )
        })
      }
    },
    async getData () {
      let data = await utils.tbk('taobao.tbk.item.info.get', {
        fields:
          'volume,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url',
        platform: 2,
        num_iids: this.num_iid
      })
      this.data = data.data.results.n_tbk_item[0]
    },
    async buy () {
      if (utils.is_weixn()) {
        return false
      } else if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        location.href = this.scheme
      } else {
        location.href = this.url
      }
    }
  }
}
</script>

<style scoped lang="less">
.page-detils {
  height: 100%;
  overflow: scroll;
  .title {
    background: #fff;
    padding: 4px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
  }

  .item1 {
    padding: 4px;
    background: #fff;
  }

  .item1 .price {
    color: #fe0136;
  }

  .item1 .numb {
    color: #ccc;
    font-size: 12px;
  }

  .fix-buttom {
    position: fixed;
    bottom: 0;
    height: 40px;
    width: 100%;
    border-top: 1px solid #ccc;
    background: #fff;
  }

  .fix-buttom > view {
    text-align: center;
    display: inline-block;
  }

  .fix-buttom > .it1 {
    display: inline-block;
    width: 25%;
    line-height: 40px;
    font-size: 15px;
    border-right: 1px solid #ccc;
    text-align: center;
  }
  .fix-buttom {
    font-size: 0;
  }
  .fix-buttom > .it1:before {
    color: #f96150;
    font-size: 20px;
    margin-right: 4px;
  }

  .fix-buttom > .it2 {
    display: inline-block;
    text-align: center;
    width: 50%;
    background: #f96150;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
  }
  .share {
    display: inline-block;
    width: 25%;
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
