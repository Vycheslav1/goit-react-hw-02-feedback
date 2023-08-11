import PropTypes from 'prop-types';

import { StateList, Li } from './StatisticsStyles.js';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StateList>
    <Li>Good:{good}</Li>
    <Li>Neutral:{neutral}</Li>
    <Li>Bad:{bad}</Li>
    <Li>Total:{total}</Li>
    <Li>Positive feedback:{positivePercentage}%</Li>
  </StateList>
);

export { Statistics };

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
