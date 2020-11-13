import React from 'react';

export const thingContext = React.createContext<any>(null);

const thingProvider: any = ({ children }) => {
  const value: any = {};

  return (
    <thingContext.Provider value={value}>
      {children}
    </thingContext.Provider>
  );
};

export default thingProvider;
