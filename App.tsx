import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// --- IMPORTACIONES ---
import HomeScreen from './src/screens/HomeScreen'; 
import InitialScreen from './src/screens/InitialScreen'; 

// --- 1. Definición de Tipos (Mínima) ---
export type RootStackParamList = {
  InitialScreen: undefined; 
  Home: undefined; 
  Settings: undefined;
};

// --- 2. Crear Stack ---
const Stack = createStackNavigator<RootStackParamList>();

// --- 3. Componente Principal (Estructura Más Limpia) ---
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;