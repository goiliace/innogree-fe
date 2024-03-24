import DefaultLayout from '~/layouts/Default'
import Home from '~/pages/Home'
import User from '~/pages/User'
import Login from '~/pages/Auth/login'
import SignUp from '~/pages/Auth/signup'
import Contact from '~/pages/Contact'
const config = {
  home: '/',
  user: '/user',
  login: '/login',
  register: '/signup',
  contact: '/contact'
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
  },
  {
    path: config.contact,
    exact: true,
    component: Contact,
    layout: DefaultLayout
  },
  {
    path: config.login,
    exact: true,
    component: Login,
    layout: DefaultLayout
  },
  {
    path: config.register,
    exact: true,
    component: SignUp,
    layout: DefaultLayout
  }
]
export default routes
