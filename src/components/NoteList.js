import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import NoteAPI from '../api/NoteAPI';
import NoteItem from './NoteItem';
import AddNoteButton from './AddNoteButton';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  let { pageNumber } = useParams();
  pageNumber = parseFloat(pageNumber);
  const history = useHistory();

  useEffect(() => {
    async function getNotes() {
      const data = await NoteAPI.getNotes(pageNumber);

      if (data.notes.length === 0 && pageNumber > 1) {
        history.push('/404');
      } else {
        setNotes(data.notes);
        setPageCount(data.pages);
      }
    }

    getNotes();
  }, [pageNumber]);

  return (
    <div className="container py-5">
      <AddNoteButton lastPage={pageNumber === pageCount} />
      {
        pageNumber > 1 && 
        <button
          className="btn btn-light"
          onClick={() => {
            history.push(`/page/${pageNumber - 1}`);
          }}
        >
          {"<Prev"}
        </button>
      }
      {
        pageNumber < pageCount &&
        <button
          className="btn btn-light"
          onClick={() => {
            history.push(`/page/${pageNumber + 1}`);
          }}
        >
          {"Next>"}
        </button> 
      }
      <div className="row d-flex justify-content-center">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>      
    </div>
  )
}

export default NoteList;