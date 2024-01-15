import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Book from './components/Book'

import BookDetails from './components/BookDetails'

import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Book" component={Book} />
    <Route exact path="/Books/:isbn13" component={BookDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
