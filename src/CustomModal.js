import React from "react";
import Modal from "react-modal";
import "./Modal.css"; // You can create this CSS file to style the modal

Modal.setAppElement("#root"); // Set the root element for accessibility

const CustomModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <h2>Title</h2>
        <button className="close-button" onClick={onRequestClose}>
          Close
        </button>
        <div className="modal-body">
          {/* Your content here */}
          <img src="example.jpg" alt="Example" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* Add more content as needed */}
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
