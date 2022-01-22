import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { modalInfoContent } from "../../utils/modalInfoContent"

function ModalInfo(props) {
  const { title, subtitle, text } = modalInfoContent[props.modalSelected]

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{subtitle}</h4>
        <p>
          {text}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfo;