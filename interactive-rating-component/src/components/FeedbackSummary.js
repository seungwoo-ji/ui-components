import { useContext } from 'react';

import { ThankWrapper, Badge, ThankHeading, ThankDescription } from './styles';

import RateContext from '../store/RateContext';

import thankIcon from '../assets/illustration-thank-you.svg';

const FeedbackSummary = () => {
  const { rate } = useContext(RateContext);

  return (
    <>
      <ThankWrapper>
        <img src={thankIcon} alt="thank you icon" />
      </ThankWrapper>
      <Badge>You selected {rate} out of 5</Badge>
      <ThankHeading>Thank you!</ThankHeading>
      <ThankDescription>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </ThankDescription>
    </>
  );
};

export default FeedbackSummary;
