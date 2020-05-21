import React, { useState } from 'react';
import Modal from './Modal';

function AddNoteButton({ pageCount, pageNumber, setNotes, setPageCount }) {
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
          setNotes={setNotes}
          setPageCount={setPageCount}
        /> : null}
    </div>
  );
}

export default AddNoteButton;

