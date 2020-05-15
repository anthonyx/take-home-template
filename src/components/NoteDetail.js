import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NoteAPI from '../api/NoteAPI';

function NoteDetail(props) {
  const { noteId } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    async function getNote() {
      const note = await NoteAPI.getNote(noteId);

      setTitle(note.title);
      setBody(note.body);
    }

    getNote();
  }, [noteId]);

  const deleteNote = async () => {
    const response = await NoteAPI.deleteNote(noteId);

    history.goBack();
  }

  const updateNote = async () => {
    const response = await NoteAPI.updateNote(noteId, title, body);
    
    history.goBack();
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