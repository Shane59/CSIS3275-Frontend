// src/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  user: null, // You can set default values here if you like
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {

  const testUser = JSON.parse(localStorage.getItem('testUser'));
  const [user, setUser] = useState(testUser);
  //const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('testUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
