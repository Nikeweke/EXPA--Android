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
          '/android/basic_elements.md',
          '/android/database.md',
          '/android/animations.md',
        ]
      },
      {
        title: 'Java',
        collapsable: true,
        children: [
          '/java/intro.md',
          '/java/env.md',
          '/java/datatypes.md',
          '/java/loops.md',
        ]
      },
    ]
  }
}