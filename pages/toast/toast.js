// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleShowToast: function () {
    wx.showToast({
      title: '你好',
      icon: 'loading',
      duration: 3000,
    })
  },

  handleShowModal: function () {
    wx.showModal({
      title: '标题',
      content: '内容',
      cancelText: '退出',
      success: function(res) {
        console.log(res)
        if(res.cancel){
          console.log('点取消')
        }
        if(res.confirm) {
          console.log('点确定')
        }
      }
    })
  },

  handleShowLoading: function () {
    wx.showLoading({
      title: '加载ing',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    setTimeout(() => {
      // 必须手动设消失
      wx.hideLoading()
    },1000)
  },

  handleShowActionSheet: function () {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res){
        console.log(res)
      }
    })
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
    return {
      title: '程浩',
      path: 'pages/toast/toast',
      imageUrl: 'http://photocdn.sohu.com/20130416/Img372885486.jpg'
    }
  }
})