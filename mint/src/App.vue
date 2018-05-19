<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
.flex3,
.flex4 {
  font-size: 0;
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
