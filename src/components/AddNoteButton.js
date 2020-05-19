import React, { useState } from 'react';
import Modal from './Modal';

function AddNoteButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button 
        className="btn btn-primary" 
        onClick={() => {setShowModal(true)}}
      >
        Add Note
      </button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default AddNoteButton

