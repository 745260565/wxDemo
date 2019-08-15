// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表,让使用都可以给组件传入数据
   */
  properties: {

  },

  /**
   * 组件的初始数据，定义组件内部初始化的数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表，定义组件内部的函数
   */
  methods: {

  },
  // 定义组件的配置选项
  // multipleSlots:在使用插槽时要设置为true
  // styleIsolation：使用样式的隔离方式
  options: {
    multipleSlots: true
  },

  // 外界给组件传入额外样式
  externalClasses: [],

  // 可以监听properties/data的改变
  observers: {
    counter: function(newVal) {
      console.log(newVal)
    }
  },

  // 组件中监听生命周期函数
  // 监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听所在页面显示出来时')
    },
    hide() {
      console.log('监听组件所在页面隐藏时')
    },
    resize() {
      console.log('监听所在页面尺寸的改变')
    }
  },
  lifetimes: {
    created() {
      console.log('组件创建')
    },
    attached() {
      console.log('组件被添加到页面')
    },
    ready() {
      console.log('组件被渲染出来')
    },
    moved() {
      console.log('组件被移动到另外一个节点')
    },
    detached() {
      console.log('组件被移除掉')
    }
  }
})
