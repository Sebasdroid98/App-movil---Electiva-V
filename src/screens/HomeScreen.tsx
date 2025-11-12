import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }: any) {
  async function handleLogout() {
    await AsyncStorage.removeItem('token');
    navigation.replace('Login');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>¡Bienvenido a la App!</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}
