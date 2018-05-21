<template>
  <div class="h-list">
      <div class="special">
      <div>
        <div :class="`iconfont ${icon}`" :style="{color:color}">{{title}}</div>
      </div>
      <div :class="'flex'+numb" :style="{borderTop:`2px solid ${color}`}">
        <img v-for="(it,i) in list" :key="i" @click="theme(it)" :src="it.img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-hlist',
  props: {
    title: {},
    icon: {},
    color: {},
    click: {},
    numb: {},
    list: {
      defalut () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    theme (ext) {
      this.$emit('click', ext)
    }
  }
}
</script>
<style lang="less">
.h-list {
  .special .iconfont:before {
    margin-left: 4px;
    margin-right: 4px;
  }
  .special .iconfont {
    font-size: 14px;
  }
  .special {
    margin-top: 8px;
  }
}
</style>
