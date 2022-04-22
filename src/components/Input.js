import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, className, placeholder, name, onChange,
}) => (
  <>
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  </>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
