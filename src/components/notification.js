// Notification.js
/*import React from 'react';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

export default Notification;*/

import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

// Prop types validation for the Notification component
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

