
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
      { path: '/copy', meta: { title: 'copy', index: '1-1' }, component: () => import('../view/string/copy') },
      { path: '/insertAtCursor', meta: { title: 'insertAtCursor', index: '1-2' }, component: () => import('../view/string/insertAtCursor') }
    ]
  },
]

export default routes