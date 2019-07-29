//index.js
//获取应用实例
const app = getApp()

//注册一个页面
Page({
  data: {
    name: 'chenghao',
    age: 18,
    students: [
      {id: 110, name: 'sdk1',age: 30},
      { id: 110, name: 'sdk2', age: 30 },
      { id: 110, name: 'sdk3', age: 30 },
      { id: 110, name: 'sdk4', age: 30 },
    ],
    counter: 0
  },
  handleBtnClick() {
    //界面不会刷新
    // this.data.counter += 1,
    // console.log('发生了点击', this.data.counter)

    //this.setDat()
    this.setData({
      counter: this.data.counter+1
    })
  },

  handleSubtractionBtnClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  //监听页面的生命周期
  onLoad() {
    // wx.request({
    //   url: 'https://www.baidu.com',
    //   success: (res) => {
    //     consloe.log(res)
    //   }
    // })
  }
})

//编程范式
//命令式编程:原生操作DOM
//声明式编程:Vue/React/Angular
