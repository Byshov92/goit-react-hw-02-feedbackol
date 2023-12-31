import {
  ButtonFeedback,
  ListButtons,
} from 'components/feedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({
  onLeaveFeedbackGood,
  onLeaveFeedbackBad,
  onLeaveFeedbackNeutral,
}) => {
  return (
    <ListButtons>
      <li>
        <ButtonFeedback type="button" onClick={onLeaveFeedbackGood}>
          Good
        </ButtonFeedback>
      </li>
      <li>
        <ButtonFeedback type="button" onClick={onLeaveFeedbackNeutral}>
          Neutral
        </ButtonFeedback>
      </li>
      <li>
        <ButtonFeedback type="button" onClick={onLeaveFeedbackBad}>
          Bad
        </ButtonFeedback>
      </li>
    </ListButtons>
  );
};
