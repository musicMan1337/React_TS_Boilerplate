import React from 'react';

const ThingContext = React.createContext<any>(null);

const ThingProvider: any = ({ children }) => {
  const value: any = {};

  return (
    <ThingContext.Provider value={value}>
      {children}
    </ThingContext.Provider>
  );
};

const useThingContext = () => {
  return React.useContext(ThingContext);
};

export { ThingProvider, useThingContext };
