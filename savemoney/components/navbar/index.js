Component({
  options: {
    multipleSlots: false // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    active: {
      type: 'string',
      value:'index'
    }
  },
  methods: { /* ... */ }
})