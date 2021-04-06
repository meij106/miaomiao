export default {
  path: '/mine',
  component: () => import('@/views/mine'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'nowplaying',
      component: () => import('@/components/Nowplaying')
    },
    {
      path: 'commingsoon',
      component: () => import('@/components/Commingsoon')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    }
  ]
}
