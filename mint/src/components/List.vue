<template>
  <div class="good-list">
    <div class="item" v-for="(item,i) in data" bindtap='godetils' :key="i">
      <img :src="item.pict_url" />
      <div class="title">{{item.title}}</div>
      <div class="ltr">
        <div class="coupon">{{item.coupon || '促'}}</div>
        <div class="endprice">￥{{item.zk_final_price}}</div>
      </div>
      <div class="shop_title">{{item.shop_title}}</div>
      <div class="ltr">
        <div></div>
        <div class="xl">已售{{item.volume}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    data: {
      defalut () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  async created () {}
}
</script>
<style scoped lang="less">
.good-list {
  background: #F0F0F0;
  .item {
    background: #fff;
    display: inline-block;
    width: 50%;
    margin-top: 5px;
  }
  .item:nth-of-type(odd) {
    border-left: 8px solid #F0F0F0;
    border-right: 4px solid #F0F0F0;
  }
  .item:nth-of-type(even) {
    border-left: 4px solid #F0F0F0;
    border-right: 8px solid #F0F0F0;
  }
  .title,.shop_title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
  }
  .shop_title{
    text-align: center;
    color: #ccc;
  }
  
  .coupon {
    background: #f26166;
    color: #fff;
    border: 1px solid #f26166;
    border-radius: 5px;
    font-size: 12px;
    line-height: 12px;
    padding: 2px;
  }

  .endprice {
    font-size: 14px;
    line-height: 18px;
    color: #f26166;
  }

  .xl {
    color: #ccc;
    font-size: 12px;
  }
}
</style>
