import React from 'react';
import PropTypes from 'prop-types';
import logoDress from '../../assests/logo.png';
import './Logo.scss';

function Logo({ className }) {
  return <img src={logoDress} alt="logo" className={className} />;
}

export default Logo;

Logo.defaultProps = {
  className: '',
};

Logo.propTypes = {
  className: PropTypes.string,
};
