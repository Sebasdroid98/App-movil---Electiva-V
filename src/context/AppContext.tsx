import React, { createContext, useState } from 'react';

export const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState<string | null>(null);

  function login(usuario: any) {
    setUser(usuario);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
