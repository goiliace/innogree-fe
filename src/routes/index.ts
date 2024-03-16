import DefaultLayout from '~/layouts/Default'
import Home from '~/pages/Home'
const config = {
  home: '',
  user: '/user'
}

const routes = [
  {
    path: config.home,
    exact: true,
    component: Home,
    layout: DefaultLayout
  }
]
export default routes
