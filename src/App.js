import React, { useState, useEffect } from 'react';
import './App.css';
import NoteAPI from './api/NoteAPI';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const notes = await NoteAPI.getNotes();
      setNotes(notes);
    }

    fetchNotes();
  }, []);

  return (
    <div className="App">
      <Router>
        <Link to='/'>
          <h3 className="py-3">Notes</h3>
        </Link>
        <Switch>
          <Route
            exact path='/'
            render={props => (<NoteList notes={notes} setNotes={setNotes}/>)}    
          />
          <Route
            path={'/note/:noteId'}
            render={props => (<NoteDetail notes={notes} setNotes={setNotes}/>)}
          />
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;