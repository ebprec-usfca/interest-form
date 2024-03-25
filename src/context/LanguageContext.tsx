import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context type
interface LanguageContextType {
  isSpanish: boolean;
  setIsSpanish: (isSpanish: boolean) => void;
}

// Define a default context value
const defaultContextValue: LanguageContextType = {
  isSpanish: false, // Default value
  setIsSpanish: () => {}, // Placeholder function
};

// Create the context with the default value
const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

// Custom hook for using this context
export function useLanguage() {
  return useContext(LanguageContext);
}

// Define the type for the provider props
interface LanguageProviderProps {
  children: ReactNode;
}

// Implement the provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <LanguageContext.Provider value={{ isSpanish, setIsSpanish }}>
      {children}
    </LanguageContext.Provider>
  );
};
