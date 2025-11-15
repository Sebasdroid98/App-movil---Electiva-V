// App.tsx
import 'react-native-gesture-handler'; // Importante para React Navigation Stack

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla
import HomeScreen from './HomeScreen'; // Asegúrate que la ruta sea correcta
// Asume que tienes otra pantalla que será el "Inicio" inicial al que quieres volver
import InitialScreen from './InitialScreen'; // ¡Crea este archivo!

// --- 1. Definir el Tipo de Parámetros (para TypeScript) ---
// Esto es lo que usa TypeScript para asegurar que las rutas sean correctas.
export type RootStackParamList = {
  InitialScreen: undefined; // La pantalla que carga primero o a la que quieres volver
  Home: undefined; // Tu pantalla de "Mi Finanza"
  Settings: undefined;
  // Agrega aquí todas tus otras pantallas
};

// --- 2. Crear el Stack Navigator ---
const Stack = createStackNavigator<RootStackParamList>();

// --- 3. El Componente Principal App ---
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        // Opcional: Oculta la barra de encabezado predeterminada de React Navigation
        screenOptions={{ headerShown: false }}
      >
        {/* Define la primera pantalla que se cargará */}
        <Stack.Screen 
          name="InitialScreen" 
          component={InitialScreen} 
        />
        
        {/* Define tu pantalla "Mi Finanza" */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        
        {/* Puedes añadir otras pantallas aquí... */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;