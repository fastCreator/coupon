const CONF = {
  port: '5757',
  rootPathname: '',

  // 微信小程序 App ID
  appId: 'wxd9831ee3712b8b2e',

  // 微信小程序 App Secret
  appSecret: '8d00f23a248f3420b6a73e1ef24536d6',

  // 是否使用腾讯云代理登录小程序
  useQcloudLogin: true,

  /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
  mysql: {
    // host: '172.16.0.5',
    host: 'gz-cdb-2q8ua6o0.sql.tencentcdb.com',
    port: 62925,
    user: 'root',
    db: 'cAuth',
    pass: 'Zg26220062',
    char: 'utf8mb4'
  },

  cos: {
    /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
    region: 'ap-guangzhou',
    // Bucket 名称
    fileBucket: 'qcloudtest',
    // 文件夹
    uploadFolder: ''
  },

  // 微信登录态有效期
  wxLoginExpires: 7200,
  wxMessageToken: 'abcdefgh'
};

module.exports = CONF;
