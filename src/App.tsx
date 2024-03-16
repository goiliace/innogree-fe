import { ElementType, Fragment } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import routes from './routes'

function App() {
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
