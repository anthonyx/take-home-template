import React, { useState } from 'react';
import Modal from './Modal';

function AddNoteButton({ pageCount, pageNumber, getNotes }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button 
        className="btn btn-primary" 
        onClick={() => {setShowModal(true)}}
      >
        Add Note
      </button>
      {showModal ? 
        <Modal
          setShowModal={setShowModal}
          pageCount={pageCount}
          pageNumber={pageNumber}
          getNotes={getNotes}
        /> : null}
    </div>
  );
}

export default AddNoteButton;

