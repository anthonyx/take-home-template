import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NoteAPI from '../api/NoteAPI';
import NoteItem from './NoteItem';
import AddNoteButton from './AddNoteButton';
// Unnecessary padding


function NoteList() {
  const [notes, setNotes] = useState([]);
  const [pages, setPages] = useState(0);
  let { pageNumber } = useParams();
  pageNumber = parseFloat(pageNumber);
  const history = useHistory();

  useEffect(() => {
    async function getNotes() {
      const data = await NoteAPI.getNotes(pageNumber);

      setNotes(data.notes);
      setPages(data.pages);
    }
    // Is there a way to cache notes we've already loaded?
    // Calling the API every time we switch pages is not good
    // Can be slow and at a real company, more server calls = more expensive
    getNotes();
  }, [pageNumber]);

  return (
    <div className="container py-5">
      <AddNoteButton />
      <div className="row">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      {
        pageNumber > 1 && 
        <button
          className="btn btn-light"
          onClick={() => {
            history.push(`/page/${pageNumber - 1}`);
          }}
        >
          {"<Previous"}
        </button>
      }
      {
        pageNumber < pages &&
        <button
          className="btn btn-light"
          onClick={() => {
            history.push(`/page/${pageNumber + 1}`);
          }}
        >
          {"Next>"}
        </button> 
      }
      
    </div>
  )
}

export default NoteList; // Missing new line at bottom
