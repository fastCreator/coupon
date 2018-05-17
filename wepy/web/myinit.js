if (!wx.showLoading) {
    wx.showLoading = function() {
        console.log('加载中');
    };
    wx.hideLoading = function() {
        console.log('停止加载');
    };
}
