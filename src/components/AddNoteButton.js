import React, { useState } from 'react';
import Modal from './Modal';

function AddNoteButton(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button 
        className="btn btn-primary" 
        onClick={() => {setShowModal(true)}}
      >
        Add Note
      </button>
      {showModal ? <Modal setShowModal={setShowModal} lastPage={props.lastPage} /> : null}
    </div>
  );
}

export default AddNoteButton;

