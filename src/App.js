import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';
function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <header>
          <h1>Library Catalog</h1>
        </header>
        <Switch>
          <Route exact path = '/'>
            <h2>Welcome to the Library!</h2>
            <div>
              <span>Check out the </span><Link to='/books'>Selection</Link>
            </div>
          </Route>
          <Route exact path='/books' component={BookList}/>
          <Route exact path ='/books/:id' component={BookDetail}/>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
