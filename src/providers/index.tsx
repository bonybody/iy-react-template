import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <>
    <Router>{children}</Router>
  </>
);
