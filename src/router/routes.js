
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/form', component: () => import('pages/ReportTablePage.vue') },
      { path: '/todo', component: () => import('pages/ToDoPage.vue') },
      { path: '/admin', component: () => import('pages/Admin.vue') },
      { path: '/test', component: () => import('pages/Test.vue') },
      { path: '/myreports', component: () => import('pages/MyReportsPage.vue') },
      { path: '/followersreports', component: () => import('pages/FollowersReportsPage.vue') },
    ]
  },
  {
    path:"/login",
    component:()=> import('layouts/LoginLayout')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
