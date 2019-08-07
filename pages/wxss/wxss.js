// pages/wxss/wxss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstname: "123",
    lastname: "23sdkl",
    age: 17,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    movies: ["sdkl","lskdl","skdjo,dsnv"],
    nums: [
      [10,40,2],
      [5,2,29],
      [80,2,50]
    ],
    score: 45,

    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
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

  },

  handleSwitchColor() {
    this.setData({
      isActive: !this.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  },

  numberFoFixed(value) {
    return value.foFixed(2)
  }
})