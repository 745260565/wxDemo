// pages/request/request.js
import request from '../../services/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送网络请求
    // wx:wx.request({
    //   url: 'https://www.easy-mock.com/mock/5be2af836addde272291bc13/example/boolUrl',
    //   data: {
    //     type: "123"
    //   },
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(res) {
    //     console.log(res)
    //   },
    //   complete: function(res) {
    //     console.log(res)
    //   },
    // })
    // post请求带参数 原生
    // this.get_data_origin()
    
    // 使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    request({
      url:'http://httpbin.org/post'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  get_data_origin() {
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'cheng',
        age: 30
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})