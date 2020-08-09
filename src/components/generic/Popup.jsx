import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.scoped.css';

const Popup = ({ children, open }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="generic__overlay">
      <div className="generic__popup">{children}</div>
    </div>,
    document.getElementById('portal')
  );
};

export default Popup;
