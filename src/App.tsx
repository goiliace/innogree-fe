import { ElementType, Fragment } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Cookies from 'js-cookie'
import routes from './routes'
import { useAppDispatch, useAppSelector } from './store'
import { validateUser } from './features/Auth/thunks'

function App() {
  const user = useAppSelector(state => state?.auth?.user)
  const dispatch = useAppDispatch()
  if (!user) {
    // get from cookie
    const token = Cookies.get('token')
    if (token) {
      dispatch(validateUser(token));
    }
  }
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          let Layout: ElementType | undefined = Fragment
          const Component = route.component

          if (route.layout) Layout = route.layout

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}
export default App
