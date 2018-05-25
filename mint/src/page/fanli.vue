<template>
  <div class="index">
    <mt-field label="返利微信" placeholder="请输入购买人微信" v-model="flwx"></mt-field>
    <mt-field label="订单号" placeholder="请输入已完成交易的订单" v-model="ddh"></mt-field>
    <mt-button size="large" type="primary" @click.native="handleClick">确定</mt-button>
    <mt-cell title="1,关注公众号，'省钱小果'，才能进行返利成功哦"></mt-cell>
    <mt-cell title="2,请输入正确微信号码，每个订单号，只能用一次哦"></mt-cell>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
export default {
  data () {
    return {
      selected: 'home'
    }
  },
  methods: {
    async handleClick () {
      let data = await utils.tbk('taobao.tbk.order.get', {
        start_time: '2018-03-05 13:52:08',
        span: '600',
        tk_status: '14',
        order_query_type: 'settle_time',
        page_no: 1,
        page_size: '100',
        fields:
          'tb_trade_parent_id,tb_trade_id,num_iid,item_title,item_num,price,pay_price,seller_nick,seller_shop_title,commission,commission_rate,unid,create_time,earning_time,tk3rd_pub_id,tk3rd_site_id,tk3rd_adzone_id'
      })
      console.log(data)
    }
  }
}
</script>
<style scoped lang="less">
</style>
