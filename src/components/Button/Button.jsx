import './Button.scss';

const Button = ({
  text,
  bgColor,
  textColor,
  isModalSaveButton,
  isEditButton,
  isDeleteButton,
  isCancelButton,
  handleModalClose,
  handleModalShow,
  changeTodo,
  deleteTodo,
  id,
}) => (
  <button
    className="button"
    style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
    onClick={
      isEditButton
        ? () => handleModalShow(id)
        : isDeleteButton
        ? () => deleteTodo(id)
        : isModalSaveButton
        ? () => changeTodo()
        : isCancelButton
        ? handleModalClose
        : () => {}
    }
  >
    {text}
  </button>
);

export default Button;
