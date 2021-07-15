import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './Layout/Layout'
import HomePage from './pages/HomePage'

import NotFound from './pages/404'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  )
}

export default App
