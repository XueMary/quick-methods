
const emptyComponent = {
  template: `<div><router-view></router-view></div>`
}

const routes = [
  {
    path: '/',
    redirect: '/copy',
    component: emptyComponent,
    meta: {
      title: 'String',
      index: '1'
    },
    children: [
      { path: '/copy', meta: { title: '复制', index: 'copy' }, component: () => import('../view/string/copy') },
      { path: '/insertAtCursor', meta: { title: '插入', index: 'insertAtCursor' }, component: () => import('../view/string/insertAtCursor') }
    ]
  },
  {
    path: '/',
    redirect: '/formatPrice',
    component: emptyComponent,
    meta: {
      title: 'Number',
      index: '2'
    },
    children: [
      { path: '/formatPrice', meta: { title: '分转元', index: 'formatPrice' }, component: () => import('../view/number/formatPrice') },
      { path: '/filterPriceToFen', meta: { title: '元转分', index: 'filterPriceToFen' }, component: () => import('../view/number/filterPriceToFen') },
    ]
  },
  {
    path: '/',
    redirect: '/scroll',
    component: emptyComponent,
    meta: {
      title: 'Dom',
      index: '3'
    },
    children: [
      { path: '/scroll', meta: { title: '滚动加载', index: 'scroll' }, component: () => import('../view/dom/scroll') },
    ]
  },
]

export default routes