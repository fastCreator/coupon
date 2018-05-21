<template>
  <div class="index">
    <div class="view">

      <keep-alive>
        <sq-home v-if="selected==='home'"></sq-home>
      </keep-alive>
      <keep-alive>
        <sq-mrjx v-if="selected==='mrjx'"></sq-mrjx>
      </keep-alive>
      <keep-alive>
        <sq-tqg v-if="selected==='tqg'"></sq-tqg>
      </keep-alive>
      <keep-alive>
        <page-seach v-if="selected==='search'"></page-seach>
      </keep-alive>

    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <div slot="icon" :class="['iconfont',selected==='home'?'icon-home_fill_light':'icon-home_light']"></div>
        首页
      </mt-tab-item>
      <mt-tab-item id="mrjx">
        <div slot="icon" :class="['iconfont',selected==='mrjx'?'icon-choicenessfill':'icon-choiceness']"></div>
        每日精选
      </mt-tab-item>
      <mt-tab-item id="tqg">
        <div slot="icon" :class="['iconfont',selected==='tqg'?'icon-countdownfill':'icon-countdown']"></div>
        淘抢购
      </mt-tab-item>
      <mt-tab-item id="search">
        <div slot="icon" :class="['iconfont',selected==='search'?'icon-search':'icon-search']"></div>
        搜索
      </mt-tab-item>
      <mt-tab-item id="my">
        <div slot="icon" :class="['iconfont',selected==='my'?'icon-my_fill_light':'icon-my_light']"></div>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Home from './sq-home.vue'
import Mrjx from './sq-mrjx.vue'
import Tqg from './sq-tqg.vue'
import search from './page-search.vue'
export default {
  components: {
    'sq-home': Home,
    'sq-mrjx': Mrjx,
    'sq-tqg': Tqg,
    'page-seach': search
  },
  data () {
    return {
      selected: 'home'
    }
  }
}
</script>
<style scoped lang="less">
.index {
  padding-bottom: 55px;
  .mint-tabbar .iconfont {
    font-size: 22px;
  }
  .mint-tabbar > .mint-tab-item {
    background-color: #fff;
    color: #999999;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #fff;
    color: #fa6161;
  }
}
</style>
