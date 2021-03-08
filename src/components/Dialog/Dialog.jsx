import Button from '../Button/Button'

import { Modal } from 'react-bootstrap'
import '../../sassStyles/_variables.scss'
import './Modal.scss'

const Dialog = ({ title, handleModalClose, show }) => (
  <Modal show={show} onHide={handleModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>{title}</Modal.Body>
    <Modal.Footer>
      <Button color={`47afff`} modal={true} onClick={handleModalClose}>
        Save
        <Button color={`#840100`} modal={true} onClick={handleModalClose}>
          Cancel
        </Button>
      </Button>
    </Modal.Footer>
  </Modal>
)

export default Dialog
