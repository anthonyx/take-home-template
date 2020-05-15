import React from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import {
  Link,
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>
          <h3 className="py-3">Notes</h3>
        </Link>
        <Switch>
          <Route
            exact path='/'
            render={() => (<Redirect to="/page/1" />)}    
          />
          <Route
            path={'/page/:pageNumber'}
            render={props => (<NoteList />)}    
          />
          <Route
            path={'/note/:noteId'}
            render={props => (<NoteDetail />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;