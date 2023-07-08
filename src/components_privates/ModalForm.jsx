import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalForm = ({ handleClickClose, modal }) => {
  return (
    <>
      <Modal show={modal} onHide={handleClickClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edita tu Publicacion!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Completa el formulario y edita tu producto</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => handleClickClose()}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
