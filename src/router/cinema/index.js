export default {
  path: '/cinema',
  component: () => import('@/views/cinema'),
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
