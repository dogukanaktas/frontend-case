import Button from '../Button/Button'

import './TableRow.scss'

const TableRow = ({ displayTodos, handleModalShow, deleteTodo }) => {
  const displayRows = () => {
    return displayTodos?.map((todo) => (
      <tr key={todo?.id} className="table-body-row">
        <td className="table-row-id">{todo?.id}</td>
        <td className="table-row-title">{todo?.title}</td>
        <td className="table-row-assignee">{todo?.assignee}</td>
        <td className="table-row-status">
          {todo?.completed ? `Done` : `In Progress`}
        </td>
        <td className="table-row-actions">
          <Button
            text={`Edit`}
            bgColor={`#0880ff`}
            textColor={`#fff`}
            handleModalShow={handleModalShow}
            isEditButton={true}
            id={todo?.id}
          />
          <Button
            text={`Delete`}
            bgColor={`#be0b01`}
            textColor={`#fff`}
            deleteTodo={deleteTodo}
            isDeleteButton={true}
            id={todo?.id}
          />
        </td>
      </tr>
    ))
  }

  return <tbody className="table-body">{displayRows()}</tbody>
}

export default TableRow
