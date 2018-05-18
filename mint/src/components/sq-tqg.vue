<template>
  <div class="sq-tqg">
    <div class="time">
      <div v-for="(item,i) in time" :key="i" :class="time[active]==item?'now item':'item'" @click="selectTime">
        <div>{{item}}:00</div>
        <div>{{time[now]==item?'正在疯抢':(time[now]>item?'已开抢':'即将开抢')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../utils/utils.js'
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
      now: -1,
      time: time,
      scrollLeft: new Date().getHours() > 15 ? 1000 : 0,
      list: [],
      page_no: 1,
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
    this.page_no = 1
    this.search()
  },
  methods: {
    selectTime (i) {
      this.active = i
      this.page_no = 1
      this.list = []
      this.search()
    },
    async search () {
      let d = myformatTime(new Date(), 'yyyy-MM-dd ')

      let data = await utils.tbk('taobao.tbk.ju.tqg.get', {
        fields:
          'click_url,pic_url,reserve_price,zk_final_price,total_amount,sold_num,title,category_name,start_time,end_time',
        start_time: d + time[this.active] + ':00:00',
        end_time: d + time[this.active + 1] + ':00:00',
        page_size: 10,
        page_no: this.page_no
      })
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
}
</style>
