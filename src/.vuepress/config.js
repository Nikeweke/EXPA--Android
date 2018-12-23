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
      '/android/intro.md',
      '/android/studio.md',
      '/android/kotlin.md',
      '/android/data_savings.md',
      '/android/activities-and-frags-services.md',
      '/android/libraries.md',
      '/android/animations.md',
      '/android/app-perfomance.md',
      '/android/problems-solutions.md',
      '/android/animations-ex1.md',
      '/android/links.md',
      {
        title: 'Kotlin',
        collapsable: true,
        children: [
          '/kotlin/idioms.md',
          '/kotlin/date-helper.md',
          '/kotlin/preferences-helper.md',
        ]
      },
      {
        title: 'Java',
        collapsable: true,
        children: [
          '/java/intro.md',
          '/java/env.md',
          '/java/IDEs.md',
          '/java/datatypes.md',
          '/java/loop-array.md',
          '/java/generics',
          '/java/multithread',
          '/java/concurrency',
          '/java/date.md',
          '/java/rx-java.md',
          '/java/links.md',
        ]
      },
    ]
  }
}