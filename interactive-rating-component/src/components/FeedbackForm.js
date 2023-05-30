import { useContext } from 'react';

import {
  RateFieldSet,
  RateLegend,
  RateInput,
  RateLabel,
  SubmitBtn,
} from './styles';

import RateContext from '../store/RateContext';

const FeedbackForm = ({ onSubmitRate }) => {
  const { rate, setRate } = useContext(RateContext);

  const rateChangeHandler = (e) => {
    setRate(+e.target.value);
  };

  const rateSubmitHandler = (e) => {
    e.preventDefault();
    if (rate <= 0) return;
    onSubmitRate(true);
  };

  return (
    <form onSubmit={rateSubmitHandler}>
      <RateFieldSet>
        <RateLegend>Choose your rate for the feedback</RateLegend>
        <RateInput
          type="radio"
          name="rate"
          id="score-1"
          value={1}
          checked={rate === 1}
          onChange={rateChangeHandler}
        />
        <RateLabel htmlFor="score-1">1</RateLabel>
        <RateInput
          type="radio"
          name="rate"
          id="score-2"
          value={2}
          checked={rate === 2}
          onChange={rateChangeHandler}
        />
        <RateLabel htmlFor="score-2">2</RateLabel>
        <RateInput
          type="radio"
          name="rate"
          id="score-3"
          value={3}
          checked={rate === 3}
          onChange={rateChangeHandler}
        />
        <RateLabel htmlFor="score-3">3</RateLabel>
        <RateInput
          type="radio"
          name="rate"
          id="score-4"
          value={4}
          checked={rate === 4}
          onChange={rateChangeHandler}
        />
        <RateLabel htmlFor="score-4">4</RateLabel>
        <RateInput
          type="radio"
          name="rate"
          id="score-5"
          value={5}
          checked={rate === 5}
          onChange={rateChangeHandler}
        />
        <RateLabel htmlFor="score-5">5</RateLabel>
      </RateFieldSet>
      <SubmitBtn disabled={rate <= 0}>Submit</SubmitBtn>
    </form>
  );
};

export default FeedbackForm;
