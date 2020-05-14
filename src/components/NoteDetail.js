import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NoteAPI from '../api/NoteAPI';

function NoteDetail(props) {
  const { noteId } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const note = props.notes.find(note => (note.id.toString() === noteId));

  if (title === null && body === null && props.notes.length > 0) {
    if (!note) {
      history.push('/');
    } else {
      setTitle(note.title);
      setBody(note.body);
    }
  }

  const deleteNote = async () => {
    const response = await NoteAPI.deleteNote(noteId);
    
    if (response.ok) {
      const notes = await NoteAPI.getNotes();
      props.setNotes(notes);
    }
    
    history.push('/');
  }

  const updateNote = async () => {
    const response = await NoteAPI.updateNote(noteId, title, body);
    
    if (response.ok) {
      const notes = await NoteAPI.getNotes();
      props.setNotes(notes);
    }
    
    history.push('/');
  }

  return (
    <div>
      <input 
        className="form-control" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => {setTitle(e.target.value)}}
      />
      <textarea 
        className="form-control" 
        rows="3" 
        placeholder="Enter note here..." 
        value={body} 
        onChange={(e) => {setBody(e.target.value)}}
      />
      <button 
        className="btn btn-danger"
        onClick={deleteNote}
      >
        Delete
      </button>
      <button
        className="btn btn-primary"
        onClick={updateNote}
      >
        Update
      </button>
    </div>
  );
}

export default NoteDetail;