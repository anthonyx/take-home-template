import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NoteAPI from '../api/NoteAPI';

function NoteDetail({ notes, pageCount }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();
  let { noteId } = useParams();
  noteId = parseFloat(noteId);

  useEffect(() => {
    const getNote = async () => {
      const fetchedNote = await NoteAPI.getNote(noteId);
      
      if (!fetchedNote) {
        history.push('/404');
      } else {
        setTitle(fetchedNote.title);
        setBody(fetchedNote.body);
      }
    }

    let note = notes && notes.find((note) => (note.id === noteId));
  
    if (!note) {
      getNote();
    } else {
      setTitle(note.title);
      setBody(note.body);
    }
  }, [noteId]);

  const deleteNote = async () => {
    await NoteAPI.deleteNote(noteId);
    
    // If the last note of the last page is deleted, direct to previous page
    if (notes.length === 1 && pageCount > 1) {
      const lastPage = pageCount - 1;
      history.push('/page/' + lastPage);
    } else {
      history.goBack();
    }
  }

  const updateNote = async () => {
    await NoteAPI.updateNote(noteId, title, body);
    history.goBack();
  }

  return (
    <div className="container d-flex flex-column align-items-center">
      <input 
        className="form-control w-50" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => {setTitle(e.target.value)}}
      />
      <textarea 
        className="form-control w-50" 
        rows="5" 
        placeholder="Enter note here..." 
        value={body} 
        onChange={(e) => {setBody(e.target.value)}}
      />
      <div>
        <button 
          className="btn btn-danger px-5"
          onClick={deleteNote}
        >
          Delete
        </button>
        <button
          className="btn btn-primary px-5"
          onClick={updateNote}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default NoteDetail;