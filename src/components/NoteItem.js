import React from 'react';
import { useHistory } from 'react-router-dom';

function NoteItem(props) {
  const history = useHistory();

  return (
    <div 
      className="card" 
      style={{width: "15rem"}}
      id={"note-item-"+props.note.id}
      onClick={() => { history.push(`/note/${props.note.id}`) }}
    >
      <div className="card-body">
        <h5 className="card-title text-left">{props.note.title}</h5>
        <p className="card-text text-left">{props.note.body}</p>
      </div>
    </div>
  );
}

export default NoteItem;
