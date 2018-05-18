<template>
  <div class="page-search">
        <div class="search">
        <input placeholder="输入关键词搜索" bindinput="inputValue" v-model="value"/>
        <button @click="addSearch(value)" >搜索</button>
    </div>
    <div class="hot">
      <div class="title">热门搜索</div>
      <div class="tag">
        <div v-for="(item,i) in tags" :key="i" class="tag-item" @click="addSearch(item)">{{item}}</div>
      </div>
    </div>
    <div class="hot history">
      <div class="title">历史搜索 <div class="iconfont icon-delete" @click="clearHistory"></div></div>
      <div class="tag">
        <div v-for="(item,i) in history" :key="i" class="tag-item" @click="search(item)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value: '',
      history: [],
      tags: ['连衣裙', '女鞋', '两件套', 'T恤', '零食'],
    }
  },
  created () {
    this.setHistory()
  },
  methods: {
    search (v) {
      this.$router.push({ path: '/list', query: { q: v } })
    },
    addSearch (v) {
      this.addHistory(v)
      this.search(v)
    },
    setHistory () {
      let s = window.localStorage.historySearch
      this.history = s ? s.split(',') : []
    },
    addHistory (v) {
      if (!~this.history.indexOf(v)) {
        this.history.push(v)
        window.localStorage.historySearch = this.history.join(',')
      }
    },
    clearHistory () {
      this.history = []
      window.localStorage.historySearch = ''
    }
  }
}
</script>

<style scoped lang="less">
.page-search {
  padding: 8px;
  .search input {
    display: inline-block;
    background-color: #faf5f5;
    width: calc(100% - 80px);
    height: 40px;
    border-radius: 8px;
    padding-left: 10px;
    border: 0;
  }
  .search button {
    border: 0;
    display: inline-block;
    width: 60px;
    margin-left: 10px;
    background-color: #f96150;
    border-radius: 8px;
    font-size: 16px;
    color: #fff;
    height: 40px;
  }
  .hot {
    margin-top: 10px;
  }
  .hot .title {
    color: #f8503d;
  }
  .hot .tag {
    overflow: hidden;
  }
  .hot .tag .tag-item {
    display: inline;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    padding: 2px 8px;
    font-size: 14px;
    border-radius: 8px;
    color: #998c8c;
    margin-right: 20px;
    margin-top: 10px;
    float: left;
  }
  .history {
    margin-top: 10px;
  }
  .title .iconfont {
    float: right;
    color: #333;
  }
}
</style>
