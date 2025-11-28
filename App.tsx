import React, { useContext, useEffect } from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { initDB } from './src/services/database/database';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        await initDB();
      } catch (error) {
        console.log("Error al inicializar la DB:", error);
      }
    })();
  }, []);
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
