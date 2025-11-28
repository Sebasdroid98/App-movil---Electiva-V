import React, { useContext, useEffect } from 'react';
import { AppContext, AppProvider } from './src/context/AppContext';
import RootNavigator from './src/navigation/RootNavigator';
import { initDB } from './src/services/database/database';

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
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}
