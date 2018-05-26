<template>
  <div class="page-list">
    <c-list :data="list" @refresh="refresh" :top="0"></c-list>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
export default {
  data () {
    return {
      list: [],
      page_size: 10,
      page_no: 1,
      favorites_id: this.$route.query.id
    }
  },
  created () {
    this.search()
  },
  methods: {
    refresh () {
      this.page_no++
      this.search()
    },
    async search () {
      let data = await utils.tbk('taobao.tbk.uatm.favorites.item.get', {
        platform: 2,
        page_size: this.page_size,
        favorites_id: this.favorites_id,
        fields:
          'coupon_end_time,coupon_remain_count,coupon_click_url,coupon_info,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick,shop_title,zk_final_price_wap,event_start_time,event_end_time,tk_rate,status,type',
        page_no: this.page_no
      })
      this.list = this.list.concat(data.data.results.uatm_tbk_item)
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
