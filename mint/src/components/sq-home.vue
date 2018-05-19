<template>
  <div class="sq-home">
    <div class="z-search">
      <div class="input" @click="toSearch">输入关键词搜索</div>
    </div>
    <mt-swipe :auto="3000" :style="{height:swipeHeight}">
      <mt-swipe-item v-for="(item,i) in imgUrl" :key="i"><img :src="item.img" /></mt-swipe-item>
    </mt-swipe>

    <div class="special border">
      <div>
        <div class="iconfont icon-ticket">特惠推荐</div>
      </div>
      <div class="flex3 c1">
        <img bindtap='theme' data-type="9k9" src="http://img.alicdn.com/tps/TB1_UFmOXXXXXc4aXXXXXXXXXXX-794-320.png" mode="widthFix" />
        <img bindtap='theme' data-type="20k" src="http://img.alicdn.com/tps/TB1fztJOXXXXXcfXpXXXXXXXXXX-794-320.png" mode="widthFix" />
        <img bindtap='theme' data-type="tjhh" src="http://img.alicdn.com/tps/TB1gKlIOXXXXXcJXpXXXXXXXXXX-794-320.png" mode="widthFix" />
      </div>
    </div>
    <div class="special">
      <div>
        <div class="iconfont icon-tao">淘宝行业市场精选</div>
      </div>
      <div class="flex3 c2">
        <img bindtap='theme' data-type="ifashion" src="http://img.alicdn.com/tps/TB1JQ9gKFXXXXX.XFXXXXXXXXXX-592-236.jpg" mode="widthFix" />
        <img bindtap='theme' data-type="qbb" src="http://img.alicdn.com/tps/TB1oyxZNpXXXXbdXVXXXXXXXXXX-594-236.png" mode="widthFix" />
        <img bindtap='theme' data-type="tbhc" src="http://img.alicdn.com/tps/TB1EdnZKpXXXXc9XpXXXXXXXXXX-592-236.png" mode="widthFix" />
      </div>
      <div class="flex3">
        <img bindtap='theme' data-type="cdj" src="http://img.alicdn.com/tps/TB10R6.KpXXXXceXXXXXXXXXXXX-592-236.png" mode="widthFix" />
        <img bindtap='theme' data-type="jyj" src="http://img.alicdn.com/tps/TB1sGn9KpXXXXXPXpXXXXXXXXXX-592-236.png" mode="widthFix" />
        <img bindtap='theme' data-type="kdc" src="http://img.alicdn.com/tps/TB1W.6YKpXXXXbBXFXXXXXXXXXX-592-236.png" mode="widthFix" />
      </div>
      <div class="flex3">
        <img bindtap='theme' data-type="tbdiy" src="http://img.alicdn.com/tps/TB1xZCmKFXXXXalXpXXXXXXXXXX-592-236.jpg" mode="widthFix" />
        <img bindtap='theme' data-type="gyhd" src="http://img.alicdn.com/tps/TB1IMTTKpXXXXXIXVXXXXXXXXXX-592-236.png" mode="widthFix" />
        <img bindtap='theme' data-type="gyhd" src="http://img.alicdn.com/tps/TB1IMTTKpXXXXXIXVXXXXXXXXXX-592-236.png" mode="widthFix" />
      </div>
    </div>
    <div class="special">
      <div>
        <div class="iconfont icon-appreciate_light">行业好货</div>
      </div>
      <div class="flex3 c3">
        <img bindtap='theme' data-type="nzjh" src="http://img.alicdn.com/tps/TB1MLBTOXXXXXa.XXXXXXXXXXXX-586-800.png" mode="widthFix" />
        <img bindtap='theme' data-type="myrt" src="http://img.alicdn.com/tps/TB1k94bOXXXXXanaFXXXXXXXXXX-586-800.png" mode="widthFix" />
        <img bindtap='theme' data-type="gyhd" src="http://img.alicdn.com/tps/TB18MXoMpXXXXXRXVXXXXXXXXXX-586-800.png" mode="widthFix" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swipeHeight: 0.387 * document.body.clientWidth + 'px',
      imgUrl: []
    }
  },
  async created () {
    this.imgUrl = (await window.axios.get(
      'https://wx.firecloud.club/apis/imgUrls'
    )).data
  },
  methods: {
    toSearch () {
      this.$router.push({ path: '/search' })
    }
  }
}
</script>
<style scoped lang="less">
.sq-home {
  .z-search {
    padding: 10px;
    font-size: 14px;
    background-color: #f96153;
    color: #fff;
  }
  .z-search .input {
    background-color: #f04e43;
    padding: 6px 10px;
    border-radius: 8px;
  }

  .border img {
    box-sizing: border-box;
    border-right: 1px solid #e2e2e9;
    border-bottom: 1px solid #e2e2e9;
  }

  .special .iconfont:before {
    margin-left: 4px;
    margin-right: 4px;
  }
  .special .iconfont {
    font-size: 16px;
    margin-bottom: 4px;
  }
  .special {
    margin-top: 10px;
  }
  .special .c1 {
    border-top: 2px solid #f28430;
  }
  .special .c2 {
    border-top: 2px solid #a44bd0;
  }
  .special .c3 {
    border-top: 2px solid #ec495e;
  }
}
</style>
