import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'

import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
