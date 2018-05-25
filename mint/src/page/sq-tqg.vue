<template>
  <div class="sq-tqg" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="40">
    <div class="time">
      <div v-for="(item,i) in time" :key="i" :class="time[active]==item?'now item':'item'" @click="selectTime(i)">
        <div>{{item}}:00</div>
        <div>{{time[now]==item?'正在疯抢':(time[now]>item?'已开抢':'即将开抢')}}</div>
      </div>
    </div>
    <div class="good">
    <div class="item" v-for="(item,i) in list" :key="i">
      <img :src="item.pic_url"/>
      <div class="info">
        <div class="title">[{{item.category_name}}]{{item.title}}</div>
        <div class="ltr">
          <div class="reserve_price">￥{{item.reserve_price}}</div>
          <div class="sold_num">已抢购{{item.sold_num}}件</div>
        </div>
        <div class="ltr">
          <div class="zk_final_price">￥
            <div class="f16">{{item.zk_final_price}}</div>
          </div>
          <div class="buy" @click="buy(item)">马上抢</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
import { Indicator } from 'mint-ui'
const time = ['00', '08', '10', '13', '15', '17', '19', '20', '21', '24']
var padLeft = n => {
  n -= 0
  if (n < 10) {
    return '0' + n
  }
  return n + ''
}
var myformatTime = function (d, format) {
  var o = {
    'M+': d.getMonth() + 1, // month
    'd+': d.getDate(), // day
    'h+': d.getHours(), // hour
    'm+': d.getMinutes(), // minute
    's+': d.getSeconds(), // second
    'q+': Math.floor((d.getMonth() + 3) / 3), // quarter
    S: d.getMilliseconds() // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (d.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return format
}
export default {
  data () {
    return {
      loading: false,
      now: -1,
      time: time,
      scrollLeft: new Date().getHours() > 15 ? 1000 : 0,
      list: [],
      page_no: 0,
      active: -1
    }
  },
  created () {
    let now
    let d = padLeft(new Date().getHours())
    for (let i = 9; i >= 0; i--) {
      if (time[i] <= d) {
        now = i
        break
      }
    }
    this.now = now
    this.active = now
  },
  methods: {
    buy (it) {
      utils.copy(it.title, it.pic_url, it.reserve_price, it.num_iid)
    },
    async loadMore () {
      this.page_no++
      this.loading = true
      await this.search()
      this.loading = false
    },
    selectTime (i) {
      this.active = i
      this.page_no = 1
      this.list = []
      this.search()
    },
    async search () {
      Indicator.open('加载中...')
      let d = myformatTime(new Date(), 'yyyy-MM-dd ')

      let data = await utils.tbk('taobao.tbk.ju.tqg.get', {
        fields:
          'click_url,pic_url,reserve_price,zk_final_price,total_amount,sold_num,title,category_name,start_time,end_time',
        start_time: d + time[this.active] + ':00:00',
        end_time: d + time[this.active + 1] + ':00:00',
        page_size: 10,
        page_no: this.page_no
      })
      Indicator.close()
      this.list = this.list.concat(data.data.results.results)
    }
  }
}
</script>

<style scoped lang="less">
.sq-tqg {
  .time {
    overflow: scroll;
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    color: #fff;
    background-color: #de595b;
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    .item {
      display: inline-block;
      width: 20%;
      height: 100%;
      padding: 6px 0;
    }
    .now {
      background: #da2432;
    }
  }
  .good {
    .item {
      padding: 8px 0 8px 8px;
      border-bottom: 1px solid #eee;
      background: #fff;
    }

    .item img {
      display: inline-block;
      width: 106px;
      height: 106px;
    }

    .item .info {
      vertical-align: top;
      box-sizing: border-box;
      padding-left: 8px;
      font-size: 14px;
      display: inline-block;
      overflow: hidden;
      width: calc(100% - 120px);
    }

    .item .info .title {
      width: 100%;
      font-size: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .item .info .reserve_price {
      color: #ff5501;
      text-decoration: line-through;
    }

    .item .info .sold_num {
      color: #ccc;
    }

    .item .info .zk_final_price {
      color: #ff5501;
      font-size: 12px;
    }

    .f16 {
      display: inline;
      font-size: 16px;
    }

    .item .info .ltr {
      margin-top: 10px;
    }

    .item .info .buy {
      background: #df2434;
      color: #fff;
      padding: 2px 18px;
    }
  }
}
</style>
