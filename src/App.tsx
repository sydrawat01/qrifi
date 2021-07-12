import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from './Layout/Layout'
import HomePage from './pages/HomePage'
import CounterPage from './pages/CounterPage'
import AppHome from './pages/App/AppHome'
import AppPosts from './pages/App/AppPosts'
import AppSinglePost from './pages/App/AppSinglePost'

import NotFound from './pages/404'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/counter" exact component={CounterPage} />
        <Route path="/app" exact component={AppHome} />
        <Route path="/app/posts" exact component={AppPosts} />
        <Route path="/app/posts/:postId" exact component={AppSinglePost} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  )
}

export default App
