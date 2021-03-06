import React, { useState } from 'react';
import NoteAPI from '../api/NoteAPI';

function Modal({ pageCount, pageNumber, setNotes, setPageCount, setShowModal }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const getNotes = async (page = 1) => {
    const data = await NoteAPI.getNotes(page);
    
    setNotes(data.notes);
    setPageCount(data.pages);
  }

  const addNote = async () => {
    await NoteAPI.createNote(title, body);
    setShowModal(false);

    // If we are on the last page, we want to refetch it after adding a note
    // TODO: Don't refetch if new page is created
    if (pageCount === pageNumber) {
      await getNotes(pageNumber);
    }
  }

  return (
    <div className="modal d-block">
      <div 
        className="modal-dialog modal-dialog-centered" 
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <input 
                className="form-control" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => {setTitle(e.target.value)}}
              />
            </h5>
            <button 
              type="button" 
              className="close" 
              onClick={() => {setShowModal(false)}}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <textarea 
              className="form-control" 
              rows="3" 
              placeholder="Enter note here..." 
              value={body} 
              onChange={(e) => {setBody(e.target.value)}}
            />
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