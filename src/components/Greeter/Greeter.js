import React from 'react';
import PropTypes from 'prop-types';
import './Greeter.css';

const Greeter = () => (
  <div className="Greeter" data-testid="Greeter">
    Greeter Component
  </div>
);

Greeter.propTypes = {};

Greeter.defaultProps = {};

export default Greeter;