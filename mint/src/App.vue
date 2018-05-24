<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import utils from './utils/utils.js'
export default {
  name: 'App',
  created () {
    if (utils.is_weixn()) {
      Toast({
        message: '建议点击右上角，使用其他浏览器打开，可以直接唤醒淘宝',
        position: 'top',
        duration: 5000
      })
    }
  }
}
if (
  !/Android|webOS|iPhone|iPod|BlackBerry|UCBrowser|iOS|Windows Phone/i.test(
    navigator.userAgent
  )
) {
  document.getElementsByTagName('html')[0].setAttribute('class', 'pc')
}
window.PointerEvent = undefined
</script>

<style>
.sq-home,
.sq-mrjx,
.page-list,
.page-detils,
.sq-tqg {
  overflow-scrolling: touch;
  transform: translate3d(0, 0, 0);
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
}

html,
body,
#app,
.index,
.view {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html.pc .good-list .item {
  width: 20%;
}
.view > div {
  height: 100%;
  overflow: auto;
}
* {
  box-sizing: border-box;
}
img {
  width: 100%;
}
#app {
  background: #f0f0f0;
}
.flex2,
.flex3,
.flex4 {
  font-size: 0;
}
.flex2 > * {
  width: 50%;
}
.flex3 > * {
  width: 33.3333%;
}
.flex4 > * {
  width: 25%;
}
.mint-header {
  background: #f96153;
}
.ltr {
  overflow: hidden;
}
.ltr > div:nth-child(odd) {
  margin-left: 5px;
  float: left;
}
.ltr > div:nth-child(even) {
  margin-right: 5px;
  float: right;
}
</style>
