// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String
    title : {
      type: String,
      value: "我是默认标题",
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }//观察者
    }
  },
  externalClasses: ['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
