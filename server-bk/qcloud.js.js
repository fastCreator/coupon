const qcloud = require('qcloud-weapp-server-sdk');

// 获取基础配置
const configs = require('./config');

// 初始化 SDK
// 将基础配置和 sdk.config 合并传入 SDK 并导出初始化完成的 SDK
module.exports = qcloud(configs);
