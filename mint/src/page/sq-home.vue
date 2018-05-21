<template>
  <div class="sq-home">
    <div class="z-search">
      <div class="input" @click="toSearch">输入关键词搜索</div>
    </div>
    <mt-swipe :auto="3000" :style="{height:swipeHeight}">
      <mt-swipe-item v-for="(item,i) in imgUrl" :key="i"><img :src="item.img" @click="swipeGo(item)"/></mt-swipe-item>
    </mt-swipe>
    <!-- <c-hlist v-for="(it,i) in hd" :key="i" v-bind="it" @click="hdClick"></c-hlist> -->
    <c-hlist v-for="(it,i) in hlist" :key="i" v-bind="it" @click="theme"></c-hlist>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
import data from '../data/sq-home.js'
export default {
  data () {
    return {
      swipeHeight: 0.387 * document.body.clientWidth + 'px',
      imgUrl: data.swipe,
      favorites: [],
      hlist: data.hlist,
      hd: data.hd
    }
  },
  async created () {
    this.favorites = (await utils.tbk('taobao.tbk.uatm.favorites.get', {
      fields: 'favorites_title,favorites_id,type',
      type: '-1'
    })).data.results.tbk_favorites
  },
  methods: {
    swipeGo (item) {
      utils.copy(item.clip.title, item.img, 0, undefined, undefined, item.clip.dlj, item.clip.kl)
    },
    theme (d) {
      let id = this.favorites.find(it => it.favorites_title === d.ext).favorites_id
      this.$router.push({ path: '/them', query: { id: id } })
    },
    hdClick (it) {
      utils.copy(it.ext.title, it.img, 0, undefined, undefined, it.ext.url, it.ext.kl)
    },
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
}
</style>
