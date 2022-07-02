import { Modal, Button } from 'react-bootstrap'

function PModal({ show, handleClose, modalData }) {
  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      {modalData && (
        <div>
          <Modal.Header closeButton>
            <Modal.Title className="text-center ">
              <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center">
                {modalData.title}
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="img-fluid rounded mb-5 mx-auto d-flex"
              src={modalData.image}
            />
            <p className="mb-4 text-center col-md-10 offset-1">
              {modalData.desc}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      )}
    </Modal>
  )
}

export default PModal
