import { createContext, useState } from 'react';

const RateContext = createContext({
  rate: 0,
  setRate: () => {},
});

export const RateContextProvider = ({ children }) => {
  const [rate, setRate] = useState(0);

  return (
    <RateContext.Provider value={{ rate, setRate }}>
      {children}
    </RateContext.Provider>
  );
};

export default RateContext;
