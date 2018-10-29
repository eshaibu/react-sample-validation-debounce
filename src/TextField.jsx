import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({name, value, error, type, onChange, title, placeholder}) => (
  <div className="form-group">
    <label>{title}</label>
    <input
      className={`form-control ${error ? 'is-invalid' : ''}`}
      type={type || 'text'}
      name={name}
      value={value}
      placeholder={placeholder || ''}
      onChange={onChange}
    />
    { error && <span className="invalid-feedback">{ error[0] }</span>}
  </div>
);

TextField.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.instanceOf(Array),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
