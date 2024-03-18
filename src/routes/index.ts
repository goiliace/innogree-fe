import DefaultLayout from '~/layouts/Default'
import Home from '~/pages/Home'
import User from '~/pages/User'
const config = {
  home: '/',
  user: '/user'
}

const routes = [
  {
    path: config.home,
    exact: true,
    component: Home,
    layout: DefaultLayout
  },
  {
    path: config.user,
    exact: true,
    component: User,
    layout: DefaultLayout
  }
]
export default routes
