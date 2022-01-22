import { v4 as uuid } from 'uuid';

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
        {text.map((paragraph) => (
          <p key={uuid()}>{paragraph}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfo;