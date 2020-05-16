import React, { useState } from 'react';
import Modal from './Modal';

function AddNoteButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Do the brackets around 'setShowModal' do anything? */}
      <button className="btn btn-primary" onClick={() => {setShowModal(true)}}>Add Note</button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default AddNoteButton
// Extra line at bottom lol
