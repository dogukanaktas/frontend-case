import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';

import './Table.scss';

const Table = ({
  displayTodos,
  handleModalShow,
  deleteTodo,
  sortStatus,
  isAsc,
}) => (
  <table className="table-container">
    <TableHead sortStatus={sortStatus} isAsc={isAsc} />
    <TableRow
      displayTodos={displayTodos}
      handleModalShow={handleModalShow}
      deleteTodo={deleteTodo}
    />
  </table>
);

export default Table;
