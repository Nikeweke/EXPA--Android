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
      '/links.md',
      {
        title: 'Android',
        collapsable: true,
        children: [
          '/android/intro.md',
          '/android/studio.md',
          // '/android/basic_elements.md',
          '/android/data_savings.md',
          '/android/activities.md',
          '/android/fragments.md',
          '/android/gradle.md',
          '/android/animations.md',
          '/android/services.md',
          '/android/butterknife.md',
          '/android/otto.md',
          '/android/retrofit.md',
          '/android/realm.md',
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
          '/java/multithread',
          '/java/concurrency',
          '/java/rx-java.md',
        ]
      },
    ]
  }
}