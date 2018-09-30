import React from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";
import "./Main.css";

const customStyles = {
  main: {},
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  subtitle: {
    color: "#f00"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  /**
   * Could prove to be useful
   */
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="container">
        <div className="idea-area">
          {/* start of Modal AREA */}
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {/* end of Modal AREA */}
            <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
            <button onClick={this.closeModal}>Add Note</button>
          </Modal>
          <Button color="primary" className="add-note-btn">
            I am a modal
          </Button>
          <div />
        </div>
      </div>
    );
  }
}
