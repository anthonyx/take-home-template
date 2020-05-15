import React, { useState } from 'react';
import NoteAPI from '../api/NoteAPI';

const Modal = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = async () => {
    const response = await NoteAPI.createNote(title, body);

    props.setShowModal(false);
    window.location.reload();
  }

  return (
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <input className="form-control" placeholder="Title" value={title} onChange={(e) => {
                setTitle(e.target.value);
              }}/>
            </h5>
            <button 
              type="button" 
              className="close" 
              onClick={() => {
                props.setShowModal(false);
              }}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <textarea className="form-control" rows="3" placeholder="Enter note here..." value={body} onChange={(e) => {
              setBody(e.target.value);
            }}/>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={addNote}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;