import PropTypes from 'prop-types';

import { Li, ButtonList, Button } from './FeedBackOptionsStyles.js';

const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map((option, index) => (
      <Li key={index}>
        <Button
          type="button"
          onClick={evt => onLeaveFeedback(option.toLowerCase())}
        >
          {option}
        </Button>
      </Li>
    ))}
  </ButtonList>
);

export { FeedBackOptions };

FeedBackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
