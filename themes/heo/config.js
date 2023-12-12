const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-02-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '点击联系我们', url: 'https://www.pandahr.jp/contact' },
    { title: '点击联系我们', url: 'https://www.pandahr.jp/contact' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: 'Panda HR',
  HERO_TITLE_2: '畔达东瀛',
  HERO_TITLE_3: '日中人材に関わる全ての企業や人々のために。',
  HERO_TITLE_4: '新版上线',
  HERO_TITLE_5: '英雄榜单',
  HERO_TITLE_LINK: 'https://www.pandahr.jp/tag/%E8%8B%B1%E9%9B%84%E6%A6%9C',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '服务流程', url: '/service' },
  HERO_CATEGORY_2: { title: '关于我们', url: '/company' },
  HERO_CATEGORY_3: { title: '新手必看', url: '/tag/新手必看' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '英雄榜',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我们是',
    '帮助赴日就职的🐼',
    '帮助在日就职的🐼',
    '帮助就职选择的🐼',
    '提供就职辅导的🐼'
  ],
  INFO_CARD_URL: 'https://www.pandahr.jp', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'icon1',
      img_1: '/images/heo/icon1.webp',
      color_1: '#ffffff',
      title_2: 'icon2',
      img_2: '/images/heo/icon2.webp',
      color_2: '#0d0d0e'
    },
    {
      title_1: 'icon2',
      img_1: '/images/heo/icon2.webp',
      color_1: '#0d0d0e',
      title_2: 'icon1',
      img_2: '/images/heo/icon1.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'icon1',
      img_1: '/images/heo/icon1.webp',
      color_1: '#ffffff',
      title_2: 'icon2',
      img_2: '/images/heo/icon2.webp',
      color_2: '#0d0d0e'
    },
    {
      title_1: 'icon2',
      img_1: '/images/heo/icon2.webp',
      color_1: '#0d0d0e',
      title_2: 'icon1',
      img_2: '/images/heo/icon1.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'icon1',
      img_1: '/images/heo/icon1.webp',
      color_1: '#ffffff',
      title_2: 'icon2',
      img_2: '/images/heo/icon2.webp',
      color_2: '#0d0d0e'
    },
    {
      title_1: 'icon2',
      img_1: '/images/heo/icon2.webp',
      color_1: '#0d0d0e',
      title_2: 'icon1',
      img_2: '/images/heo/icon1.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'icon1',
      img_1: '/images/heo/icon1.webp',
      color_1: '#ffffff',
      title_2: 'icon2',
      img_2: '/images/heo/icon2.webp',
      color_2: '#0d0d0e'
    },
    {
      title_1: 'icon2',
      img_1: '/images/heo/icon2.webp',
      color_1: '#0d0d0e',
      title_2: 'icon1',
      img_2: '/images/heo/icon1.webp',
      color_2: '#ffffff'
    }
  ],

  SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: '微信交流群',
  SOCIAL_CARD_TITLE_2: 'Hi！ 加入我们的微信讨论群',
  SOCIAL_CARD_TITLE_3: '点击加入社群',
  SOCIAL_CARD_URL: 'https://www.pandahr.jp/article/wechatgroup',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
