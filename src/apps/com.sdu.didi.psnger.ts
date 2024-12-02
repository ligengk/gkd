import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴',
  groups: [
    {
      name: '局部广告-打车页面广告',
      key: 0,
      desc: '点击广告卡片左上角x',
      enable: false,
      rules: [
        {
          key: 0,
          matches: [
            'ImageView[id="com.sdu.didi.psnger:id/second_entrance_img"] + @ImageView[id="com.sdu.didi.psnger:id/left_close_img"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/13760846'],
          activityIds: ['com.didi.sdk.app.MainActivity'],
        },
      ],
    },
    {
      name: '全屏广告-优惠券',
      key: 1,
      enable: false,
      quickFind: true,
      snapshotUrls: [
        'https://i.gkd.li/i/14047551',
        'https://i.gkd.li/i/13947142',
      ],
      activityIds: [
        'com.didi.sdk.app.launch.splash.SplashActivity',
        'com.didi.sdk.app.MainActivity',
      ],
      rules: [
        {
          matches: ['[vid="popClose"][desc="关闭弹窗"]'],
        },
      ],
    },
    {
      name: '功能类-顺风车车主页',
      key: 2,
      desc: '打开后，直接进入顺风车车主页面',
      enable: false,
      actionDelay: 200,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: ['@[text*="车主"] <<n [vid="v6x_home_bottom_nav"]'],
          snapshotUrls: ['https://i.gkd.li/i/13760846'],
          activityIds: ['com.didi.sdk.app.MainActivity'],
        },
      ],
    },
  ],
});
