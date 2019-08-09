// pages/cpn/cpn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },

  handleIncrement(event) {
    console.log("sdjlk",event)
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handleTabClick(event) {
    console.log(event)
  },

  handleIncrementCpn() {
    //获取组件对象
    const my_sel = this.selectComponent(".sel-class")
    console.log(my_sel)
    // // 修改组件中的数据（不合理）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20 
    // })
    // 通过方法对数据修改
    my_sel.incrementCounter(15)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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