import PropTypes from 'prop-types';

import { Div, FeedBack } from './SectionStyles.js';

const Section = ({ title, children }) => (
  <Div>
    <FeedBack>{title}</FeedBack>
    {children}
  </Div>
);

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
