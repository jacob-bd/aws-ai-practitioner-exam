import React, { createContext, useState, useContext } from 'react';

const UIContext = createContext();

export function UIProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [largeText, setLargeText] = useState(false);

  return (
    <UIContext.Provider value={{ darkMode, setDarkMode, largeText, setLargeText }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}