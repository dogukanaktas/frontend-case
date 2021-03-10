import './Checkbox.scss'

const Checkbox = ({ handleCheckboxChange, completed }) => (
  <div className="checkbox-container">
    <input
      type="checkbox"
      id="checkbox"
      className="checkbox"
      value={completed}
      onChange={handleCheckboxChange}
      defaultChecked={completed}
    />
    <label htmlFor="checkbox">{completed ? 'Completed' : 'In Progress'}</label>
  </div>
)

export default Checkbox