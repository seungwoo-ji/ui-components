import { styled, css, keyframes } from 'styled-components';

const screenReaderOnly = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
`;

const tileShake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

export const FeedbackContainer = styled.div`
  padding: 1.65em;
  background: linear-gradient(
    to bottom,
    hsl(217, 20%, 16%),
    hsl(213, 20%, 14%),
    hsl(209, 27%, 12%)
  );
  border-radius: 15px;
  max-width: 21.25em;
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  width: 3em;
  height: 3em;
  background-color: ${(props) => props.theme.neutral.darkBlue};
  border: 0;
  border-radius: 50%;

  & img {
    width: 37%;
  }
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.neutral.white};
  font-size: 1.45rem;
  font-weight: 700;
  margin: 1em 0 0.5em 0;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.neutral.mediumGrey};
  font-size: 0.8rem;
  line-height: 1.4rem;
`;

export const RateFieldSet = styled.fieldset`
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  border: 0;
  margin: 1.3em 0;
`;

export const RateLegend = styled.legend`
  ${screenReaderOnly}
`;

export const RateInput = styled.input`
  ${screenReaderOnly}
`;

export const RateLabel = styled.label`
  color: ${(props) => props.theme.neutral.mediumGrey};
  width: 3em;
  line-height: 3em;
  font-size: 0.8rem;
  text-align: center;
  background-color: ${(props) => props.theme.neutral.darkBlue};
  transition: all 350ms;
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  ${RateInput}:checked + &:hover {
    background-color: ${(props) => props.theme.primary.orange};
    color: ${(props) => props.theme.neutral.white};
  }

  ${RateInput}:checked + & {
    background-color: ${(props) => props.theme.neutral.lightGrey};
    color: ${(props) => props.theme.neutral.white};
  }

  ${RateInput}:focus + & {
    outline: 1px auto;
  }

  ${RateInput}:focus + & {
    outline: 1px auto -webkit-focus-ring-color;
  }

  ${RateInput}:focus:not(:focus-visible) + & {
    outline: 0;
  }
`;

export const SubmitBtn = styled.button`
  background-color: ${(props) => props.theme.primary.orange};
  color: ${(props) => props.theme.neutral.white};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  width: 100%;
  padding: 1em 0;
  border: 0;
  border-radius: 100vmax;
  transition: all 350ms;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.neutral.white};
    color: ${(props) => props.theme.primary.orange};
  }

  &:disabled {
    background-color: ${(props) => props.theme.neutral.darkBlue};
    color: ${(props) => props.theme.neutral.mediumGrey};
    cursor: not-allowed;
  }
`;

export const ThankWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  animation: ${tileShake} 0.5s linear 2;
`;

export const Badge = styled.div`
  width: fit-content;
  margin: 1.5em auto;
  padding: 0.5em 0.9em;
  border-radius: 100vmax;
  font-size: 0.8rem;
  color: hsl(25, 97%, 53%, 0.8);
  background-color: ${(props) => props.theme.neutral.darkBlue};
  text-align: center;
`;

export const ThankHeading = styled(Heading)`
  text-align: center;
`;

export const ThankDescription = styled(Description)`
  text-align: center;
`;
