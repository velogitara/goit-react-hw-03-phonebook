import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ title, filter }) => {
  return (
    <div>
      <h3>{title}</h3>
      <label>
        <input type="text" placeholder="add something" onChange={filter} />
      </label>
    </div>
  );
};

export default Filter;

Filter.protoTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
