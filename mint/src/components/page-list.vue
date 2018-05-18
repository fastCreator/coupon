<template>
  <div class="page-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="40">
    <div class='filter flex4'>
    <div :class="filter.sort===SORT.popular?'active':''" @click='toggleSort(SORT.popular)'  >人气 </div>
    <div :class="filter.sort===SORT.sales?'active':''" @click='toggleSort(SORT.sales)'  >销量</div>
    <div :class="filter.sort===SORT.price?'active':''" @click='toggleSort(SORT.price)'  >价格</div>
    <div :class="{'iconfont icon-check':filter.has_coupon}" @click="toggleCoupon">优惠劵<span></span></div>
  </div>
    <list :data="list"></list>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
export default {
  data () {
    return {
      loading: false,
      SORT: {
        popular: 'tk_total_sales_des',
        sales: 'total_sales_des',
        price: 'price_asc'
      },
      filter: {
        page_no: 1,
        page_size: 10,
        platform: 1,
        sort: 'tk_total_sales_des',
        q: '',
        has_coupon: true
      },
      list: []
    }
  },
  created () {
    
  },
  methods: {
    async loadMore () {
      this.page_no++
      this.loading = true
      await this.search()
      this.loading = false
    },
    toggleCoupon () {
      this.filter.has_coupon = !this.filter.has_coupon
    },
    toggleSort (v) {
      this.list = []
      this.filter.sort = v
      this.search()
    },
    async search () {
      let data = await utils.tbk('taobao.tbk.sc.material.optional', this.filter)
      this.list = this.list.concat(data.data.results.results)
    }
  }
}
</script>

<style scoped lang="less">
.page-list {
  .filter {
    display: inline-block;
    width: 100%;
    background-color: #fff;
    & > div {
      font-size: 18px;
      line-height: 40px;
      text-align: center;
      display: inline-block;
    }
    .active,
    .iconfont {
      color: #f26166;
    }
    .iconfont::before {
      position: absolute;
      margin-left: -17px;
    }
  }
}
</style>
