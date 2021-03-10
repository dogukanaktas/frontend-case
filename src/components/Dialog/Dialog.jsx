import Button from '../Button/Button'
import { Modal } from 'react-bootstrap'

import '../../sassStyles/_variables.scss'
import './Dialog.scss'
import Input from '../Input/Input'
import Checkbox from '../Checkbox/Checkbox'

const Dialog = ({
  modalTodo: { title,completed },
  handleModalClose,
  handleInputChange,
  handleCheckboxChange,
  changeTodo,
  open,
}) => (
  <Modal show={open} onHide={handleModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>Title</Modal.Title>
    </Modal.Header>
    <Modal.Body className="modal-body-container">
      <Input
        value={title}
        name={`title`}
        handleInputChange={handleInputChange}
      />
      <Checkbox
        handleCheckboxChange={handleCheckboxChange}
        completed={completed}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button
        text={`Save`}
        bgColor={`#0880ff`}
        textColor={`#ffff`}
        handleModalClose={handleModalClose}
        changeTodo={changeTodo}
        isModalSaveButton={true}
      />
      <Button
        text={`Cancel`}
        bgColor={`#be0b01`}
        textColor={`#ffff`}
        handleModalClose={handleModalClose}
        isCancelButton={true}
      />
    </Modal.Footer>
  </Modal>
)

export default Dialog
