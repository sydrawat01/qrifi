import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CounterPage from './pages/CounterPage'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/counter" component={CounterPage} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
