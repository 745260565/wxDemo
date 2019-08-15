//app.js
//注册一个小程序

const TOKEN = 'token'

App({
  //小程序初始化完成时，会执行的生命周期函数
  onLaunch: function (options) {
    // console.log(options)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    //先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length !== 0){//已经有token，验证token是否过期
      this.check_token(token)
    }else{
      this.login()
    }
    
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

  login(){
    console.log('执行登录')
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // code只有五分钟有效期
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          data: {
            code: res.code
          },
          method: 'post',
          success: res => {
            // 取出token
            const token = res.data.token;
            // token保存到globalData中
            this.globalData.token = token;
            // console.log(this.globalData.token)
            // console.log(res)
            // 进行本地存储
            wx.setStorageSync(TOKEN, token)
          },

        })
      }
    })
  },

  check_token(token){
    console.log('执行验证token')
    wx.request({
      url: 'http://123.207.32.32.3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },

  globalData: {
    name: 'chenghao',
    age: 30,
    token: '',
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