import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './Layout/Layout'
import HomePage from './pages/HomePage'
import CounterPage from './pages/CounterPage'

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/counter" component={CounterPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  )
}

export default App
