export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: '../layouts',
    routes: [
      { path: '/home', component: './' },
      { path: '/home/test', component: './Test' },
    ],
  },

  {
    path: '/exception',
    routes: [
      { path: '/exception', redirect: '/exception/404' },
      { path: '/exception/:code', component: './Exception' },
    ],
  },
];
