import React, { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import NoteItem from './NoteItem';
import AddNoteButton from './AddNoteButton';

function NoteList({ notes, getNotes, pageCount }) {
  let { pageNumber } = useParams();
  pageNumber = parseFloat(pageNumber);
  const history = useHistory();

  useEffect(() => {
    getNotes(pageNumber);
  }, [pageNumber]);
  
  const prevButtonDisabled = pageNumber === 1;
  const nextButtonDisabled = pageNumber === pageCount;

  return (
    <div className="container py-5">
      <AddNoteButton 
        pageNumber={pageNumber}
        pageCount={pageCount} 
        getNotes={getNotes}
      />
      <button
        className="btn btn-light"
        disabled={prevButtonDisabled}
        onClick={() => {
          history.push(`/page/${pageNumber - 1}`);
        }}
      >
        {"<Prev"}
      </button>
      <button
        className="btn btn-light"
        disabled={nextButtonDisabled}
        onClick={() => {
          history.push(`/page/${pageNumber + 1}`);
        }}
      >
        {"Next>"}
      </button> 
      <div className="row d-flex justify-content-center">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>      
    </div>
  )
}

export default NoteList;