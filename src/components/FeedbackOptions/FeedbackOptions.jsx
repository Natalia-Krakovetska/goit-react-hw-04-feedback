import PropTypes from 'prop-types';
import shortid from 'shortid';
import { FeedbackOptionsList } from './FeedbackOptions.styles'
import { FeedbackOptionsBtn } from './FeedbackOptions.styles'
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsList>
      {options.map(option => (
        <FeedbackOptionsBtn
          key={shortid.generate()}
          name={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackOptionsBtn>
      ))}
    </FeedbackOptionsList>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
