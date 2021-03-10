import Arrow from '../../icons/Arrow';

import './TableHead.scss';

const TableHead = ({ sortStatus, isAsc }) => (
  <thead className="table-head">
    <tr className="table-head-row">
      <th scope="col" className="table-head-id">
        #
      </th>
      <th scope="col" className="table-head-title">
        Title
      </th>
      <th scope="col" className="table-head-assignee">
        Assignee
      </th>
      <th
        scope="col"
        className="table-head-status"
        onClick={sortStatus ? sortStatus : () => {}}
      >
        <span>Status</span>
        <span>
          <Arrow
            width={`15px`}
            height={`15px`}
            color={`#00000`}
            degree={isAsc ? 180 : 0}
            sortStatus={sortStatus}
          />
        </span>
      </th>
      <th scope="col" className="table-head-actions">
        Actions
      </th>
    </tr>
  </thead>
);

export default TableHead;
