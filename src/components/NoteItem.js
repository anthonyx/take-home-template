import React from 'react';
import { useHistory } from 'react-router-dom';

// TODO: Make cards into a list and make clickable and also scrollable if content is too long
function NoteItem(props) {
  const history = useHistory();

  return (
    <div 
      className="card m-1 col-sm-6 col-md-4 col-lg-3" 
      id={"note-item-" + props.note.id}
      onClick={() => {history.push(`/note/${props.note.id}`)}}
    >
      <div className="card-body">
        <h5 className="card-title text-left text-truncate">{props.note.title}</h5>
        <p 
          className="card-text text-left overflow-auto"
          style={{height: "4rem"}}
        >{props.note.body}</p>
      </div>
    </div>
  );
}

export default NoteItem;
