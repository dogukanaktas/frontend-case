import './Input.scss'

const Input = ({ value, handleInputChange, name }) => (
  <input type="text" name={name} value={value} onChange={handleInputChange} />
)

export default Input
