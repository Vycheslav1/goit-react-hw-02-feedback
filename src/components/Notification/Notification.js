import PropTypes from 'prop-types';

import { FeedBack } from './NotificationStyles.js';

const Notification = ({ message }) => <FeedBack>{message}</FeedBack>;

export { Notification };

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
