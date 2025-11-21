import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import FeaturesScreen from '../screens/FeaturesScreen';
import InitialScreen from '../screens/InitialScreen';

import { AppContext } from '../context/AppContext';

// 1. Se define los tipos de parametros del stack para cada pantalla
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Initial: undefined;
  Features: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { user } = useContext(AppContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user == null ? (
          // Si NO hay usuario → Mostrar Login
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Inicio sesión' }}
          />
        ) : (
          // Si HAY usuario → Mostrar pantallas internas
          <>
            <Stack.Screen
              name="Initial"
              component={InitialScreen}
              options={{ title: 'Pantalla inicial' }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Inicio' }}
            />
            <Stack.Screen
              name="Features"
              component={FeaturesScreen}
              options={{ title: 'Características' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
