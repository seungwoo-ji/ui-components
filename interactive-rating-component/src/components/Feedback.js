import { useState } from 'react';

import FeedbackSummary from './FeedbackSummary';
import FeedbackForm from './FeedbackForm';

import {
  FeedbackContainer,
  CircleWrapper,
  Heading,
  Description,
} from './styles';

import starIcon from '../assets/icon-star.svg';

const Feedback = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  let content = (
    <FeedbackContainer>
      <CircleWrapper>
        <img src={starIcon} alt="star icon" />
      </CircleWrapper>
      <Heading>How did we do?</Heading>
      <Description>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Description>
      <FeedbackForm onSubmitRate={setIsSubmitted} />
    </FeedbackContainer>
  );

  if (isSubmitted) {
    content = (
      <FeedbackContainer>
        <FeedbackSummary />
      </FeedbackContainer>
    );
  }

  return content;
};

export default Feedback;
