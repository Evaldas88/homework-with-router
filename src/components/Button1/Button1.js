import React from 'react';
import PropTypes from 'prop-types';
import './Button1.css';

const Button1 = ({ passedId, color, text, parentCallback }) => (
  <button className="btn1 btn-light"
    id={passedId}
    onClick={() => parentCallback()}
    style={{ color: color }}
  >
    {text}
  </button>
);

Button1.propTypes = {
  passedId: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button1.defaultProps = {};

export default Button1;
