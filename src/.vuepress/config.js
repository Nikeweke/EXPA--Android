module.exports = {
  title: 'Expa - Android',
  description: 'Experience from Android world',
  base: '/EXPA--Android/',
  dest: '../docs',
  port: '3000',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'To repository', link: 'https://github.com/Nikeweke/EXPA--Android'},
    ],
    sidebar: [
      '/intro.md',
      '/links.md',
      '/problems-solutions.md',
      {
        title: 'Animation',
        collapsable: true,
        children: [
          '/animation-ui/animations.md',
          '/animation-ui/appbar-layout.md',
          '/animation-ui/motion-layout.md',
          '/animation-ui/fragment-transactions.md',
          '/animation-ui/example-tabs.md',
          '/animation-ui/example-animations.md',
        ]
      },

      {
        title: 'Style',
        collapsable: true,
        children: [
          '/style-ui/intro.md',
        ]
      },

      {
        title: 'Work with data',
        collapsable: true,
        children: [
          '/work-with-data/activities-and-frags-services.md',
          '/work-with-data/http-requests.md',
          '/work-with-data/android-ndk.md',
          '/work-with-data/data-storages.md',
          '/work-with-data/room-orm.md',
        ]
      },

      {
        title: 'Kotlin',
        collapsable: true,
        children: [
          '/kotlin/intro.md',
          '/kotlin/idioms.md',
          '/kotlin/coroutines.md',
          '/kotlin/date-helper.md',
          '/kotlin/preferences-helper.md',
          '/kotlin/links.md',
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
