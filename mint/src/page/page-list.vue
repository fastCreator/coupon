<template>
  <div class="page-list">
    <div class='filter flex3'>
      <div :class="filter.sort===SORT.sales?'active':''" @click='toggleSort(SORT.sales)'>销量</div>
      <div :class="filter.sort===SORT.popular?'active':''" @click='toggleSort(SORT.popular)'>人气 </div>
      <div :class="filter.sort===SORT.price?'active':''" @click='toggleSort(SORT.price)'>价格</div>
      <!-- <div :class="{'iconfont icon-check':filter.has_coupon}" @click="toggleCoupon">优惠劵
        <span></span>
      </div> -->
    </div>
    <c-list :data="list" @refresh="refresh" :top="42"></c-list>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
export default {
  data () {
    return {
      SORT: {
        popular: 'tk_total_sales_des',
        sales: 'total_sales_des',
        price: 'price_asc'
      },
      filter: {
        page_no: 1,
        page_size: 10,
        platform: 1,
        sort: 'total_sales_des',
        q: this.$route.query.q,
        has_coupon: true
      },
      list: []
    }
  },
  created () {
    this.search()
  },
  methods: {
    refresh () {
      this.filter.page_no++
      this.search()
    },
    toggleCoupon () {
      this.list = []
      this.filter.has_coupon = !this.filter.has_coupon
      this.search()
    },
    toggleSort (v) {
      this.list = []
      this.filter.sort = v
      this.search()
    },
    async search () {
      let data = await utils.tbk(
        'taobao.tbk.sc.material.optional',
        this.filter
      )
      this.list = this.list.concat(data.data.result_list.map_data)
    }
  }
}
</script>

<style scoped lang="less">
.page-list {
  height: 100%;
  overflow: auto;
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
      position: relative;
      color: #f26166;
    }
    .iconfont::before {
      position: absolute;
      margin-left: -17px;
    }
  }
}
</style>
