import propTypes from 'prop-types';
import React from 'react';

const TableRow = ({ name, value, className }) => (
  <tr className={className}>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
);

TableRow.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};

export default TableRow;
