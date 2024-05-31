import React, { useState } from 'react';
import './MessageBox.css';
import CloseIcon from '@material-ui/icons/Close';

const MessageBox = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="message-box">
        <p>Special offer! Get 20% off now <a href="#offer">Give it to me</a></p>
        <CloseIcon className="close-icon" onClick={() => setIsOpen(false)} />
      </div>
    )
  );
};

export default MessageBox;