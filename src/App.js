import React, { useState } from 'react';
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
  const [notes, setNotes] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const NoMatch = () => {
    return (
      <div>
        <h1>404 Error</h1>
        <p>
          <Link to="/">Go home</Link>
        </p>
      </div>
    );
  }

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
            render={props => (
              <NoteList 
                notes={notes} 
                setNotes={setNotes} 
                pageCount={pageCount}
                setPageCount={setPageCount}
              />
            )}    
          />
          <Route
            path={'/note/:noteId'}
            render={props => (
              <NoteDetail 
                notes={notes} 
                pageCount={pageCount}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;