//app.js
//注册一个小程序
App({
  //小程序初始化完成时，会执行的生命周期函数
  onLaunch: function (options) {
    // console.log(options)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    wx.getUserInfo({
      //数据拿到之后，再进行回调的
      success: function(res){
        // console.log(res)
      }
    })
    // setTimeout(function(){
    //   const err = new Error()
    //   throw err
    // }, 3000)
  },
  globalData: {
    name: 'chenghao',
    age: 30,
    userInfo: null
  },
  //小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options){
    // console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
  },
  //界面隐藏
  onHide: function(){

  },
  //小程序中发生错误时会执行
  onError: function(){
    console.log('发生错误')
  }
})