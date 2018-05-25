<template>
  <div class="sq-mrjx">
    <img src="http://alp.alicdn.com/1476310476060.png">
    <div class="search">
      <input placeholder="输入关键词搜索" v-model="filters.q" />
      <button @click="ok">搜索</button>
    </div>
    <c-list :data="data" @refresh="refresh" :top="90"></c-list>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
export default {
  data () {
    return {
      data: [],
      filters: { platform: 2, page_size: 10, q: '', page_no: 1 }
    }
  },
  created () {
    this.search()
  },
  methods: {
    refresh () {
      this.filters.page_no++
      this.search()
    },
    ok () {
      this.filters.page_no = 1
      this.data = []
      this.search()
    },
    async search () {
      let d = await utils.tbk('taobao.tbk.dg.item.coupon.get', this.filters)
      this.data = this.data.concat(d.data.results.tbk_coupon)
    }
  }
}
</script>
<style scoped lang="less">
.sq-mrjx {
  .search {
    input {
      border: none;
      display: inline-block;
      background-color: #faf5f5;
      width: calc(100% - 80px);
      height: 40px;
      border-radius: 8px;
      padding-left: 10px;
    }
    button {
      border: none;
      display: inline-block;
      width: 60px;
      margin-left: 10px;
      background-color: #f96150;
      border-radius: 8px;
      font-size: 16px;
      color: #fff;
      height: 40px;
    }
  }
}
</style>
