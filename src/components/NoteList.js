import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NoteItem from './NoteItem';
import AddNoteButton from './AddNoteButton';
import NoteAPI from '../api/NoteAPI';

function NoteList({ notes, pageCount, setNotes, setPageCount }) {
  let { pageNumber } = useParams();
  pageNumber = parseFloat(pageNumber);
  const history = useHistory();

  useEffect(() => {
    async function getNotes(page = 1) {
      const data = await NoteAPI.getNotes(page);
      
      if (!data || (data.notes.length === 0 && page > 1)) {
        history.push('/404');
      } else {
        setNotes(data.notes);
        setPageCount(data.pages);
      }
    }

    getNotes(pageNumber);
  }, [pageNumber]);
  
  const prevButtonDisabled = pageNumber === 1;
  const nextButtonDisabled = pageNumber === pageCount;

  return (
    <div className="container py-5">
      <AddNoteButton
        pageNumber={pageNumber}
        pageCount={pageCount} 
        setNotes={setNotes}
        setPageCount={setPageCount}
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