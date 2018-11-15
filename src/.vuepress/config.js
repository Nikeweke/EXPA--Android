module.exports = {
  title: 'Expa - Android & Java',
  description: 'Experience from Android world',
  base: '/EXPA--Android-Java/',
  dest: '../docs',
  port: '3000',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'To repository', link: 'https://github.com/Nikeweke/EXPA--Android-Java'},
    ],
    sidebar: [
      '/intro.md',
      '/links.md',
      {
        title: 'Android',
        collapsable: true,
        children: [
          '/android/intro.md',
          // '/android/studio.md',
          // '/android/gradle.md',
          '/android/basic_elements.md',
          '/android/data_savings.md',
          '/android/animations.md',
          // '/android/lifecycles-activity.md',
          // '/android/lifecycles-fragment.md',
          // '/android/services.md',
          // '/android/otto.md',
          // '/android/realm.md',
          // '/android/retrofit.md',
        ]
      },
      {
        title: 'Java',
        collapsable: true,
        children: [
          '/java/intro.md',
          '/java/env.md',
          '/java/netbeans.md',
          '/java/datatypes.md',
          '/java/loop-array.md',
          '/java/generics',
          '/java/multithread-and-concurrency',
          '/java/rx-java.md',
        ]
      },
    ]
  }
}