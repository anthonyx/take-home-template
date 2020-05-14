import React from 'react'
import { useHistory } from 'react-router-dom';

function NoteItem(props) {
  const history = useHistory();

  return (
    <div 
      className="list-group-item-action col-s-6 col-md-4 col-lg-3 p-2" 
      id={"note-item-"+props.note.id}
      onClick={() => { history.push(`/note/${props.note.id}`) }}
    >
      <h6 className="text-left">
        {props.note.title}
      </h6>
      <p className="text-left">
        {props.note.body}
      </p>
    </div>
  );
}

export default NoteItem;