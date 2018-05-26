<template>
  <div class="good-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">
    <div class="item" v-for="(item,i) in data" @click='godetils(item)' :key="i" v-if="compareTime(item.coupon_end_time)">
      <img :src="item.pict_url" />
      <div class="box">
        <div class="title">{{item.title}}</div>
        <div class="ltr ck">
          <div class="coupon">{{item.coupon_info ? (setc(item.coupon_info)+'元券'): '促'}}</div>
          <div class="xl" v-if="item.coupon_info">剩余{{round(item.coupon_remain_count/100)}}</div>
        </div>

        <div class="ltr">
          <div class="endprice">￥{{(item.zk_final_price - setc(item.coupon_info)).toFixed(1)}}
            <span class="x1" v-if="item.coupon_info">券后</span>
          </div>
          <div class="xl">已售{{item.volume}}</div>
        </div>
        <div class="shop_title ck">{{item.shop_title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from "mint-ui"
export default {
  name: "c-list",
  props: {
    data: {
      defalut() {
        return []
      }
    },
    top: {
      defalut: 0
    }
  },
  data() {
    return {
      loading: true
    }
  },
  created() {
    Indicator.open("加载中...")
  },
  watch: {
    data(n, o) {
      setTimeout(() => {
        Indicator.close()
        if (n.length >= 10) {
          this.loading = false
        }
      }, 80)
    }
  },
  methods: {
    compareTime(t){
      return new Date(t) > Date.now()
    },
    round(v) {
      if (v) return Math.round(v)
      return 0
    },
    setc(c) {
      if (c) return c.match(/减(\d+)元/)[1] - 0
      return 0
    },
    godetils(item) {
      let query = {
        num_iid: item.num_iid,
        coupon_click_url: item.coupon_click_url,
        coupon_id: item.coupon_id
      }
      this.$router.push({ path: "/detils", query: query })
    },
    loadMore() {
      this.$emit("refresh")
      Indicator.open("加载中...")
      this.loading = true
    }
  }
}
</script>
<style lang="less">
.good-list {
  background: #f0f0f0;
  .item {
    background: #fff;
    display: inline-block;
    width: 50%;
    margin-top: 4px;
  }
  .item:nth-of-type(odd) {
    border-left: 4px solid #f0f0f0;
    border-right: 2px solid #f0f0f0;
  }
  .item:nth-of-type(even) {
    border-left: 2px solid #f0f0f0;
    border-right: 4px solid #f0f0f0;
  }
  .box {
    padding: 4px;
  }
  .title,
  .shop_title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
  }
  .ck {
    margin: 2px 0;
  }
  .shop_title {
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
    .x1 {
      color: #ccc;
      font-size: 12px;
    }
  }

  .xl {
    color: #ccc;
    font-size: 12px;
  }
}
</style>
