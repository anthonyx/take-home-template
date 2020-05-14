import React, { useState } from 'react';
import NoteItem from './NoteItem'
import AddNoteButton from './AddNoteButton';

function NoteList(props) {
  const [filterText, setFilterText] = useState('');
  let notes = props.notes.filter(note => {
    return note.title.toLowerCase().includes(filterText) || 
      note.body.toLowerCase().includes(filterText)
  })

  return (
    <div className="container py-5">
      <AddNoteButton setNotes={props.setNotes}/>
      <input 
        placeholder="Search"
        value={filterText}
        onChange={(event) => {
          setFilterText(event.target.value);
        }}
      />
      <div className="row">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} setNotes={props.setNotes}/>
        ))}
      </div>
    </div>
  )
}

export default NoteList;