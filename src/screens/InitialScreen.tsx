import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// Se asume que importaste RootStackParamList de App.tsx
import { StackScreenProps } from '@react-navigation/stack'; 

// Debes definir o importar el tipo RootStackParamList aquí si no está en App.tsx
type RootStackParamList = {
    InitialScreen: undefined;
    Home: undefined;
    // ... otras rutas
};
type InitialScreenProps = StackScreenProps<RootStackParamList, 'InitialScreen'>;

const InitialScreen: React.FC<InitialScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, Pantalla Inicial</Text>
      <Button
        title="Ir a Mi Finanza (Home)"
        // Esto navega a la pantalla Home
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, marginVertical: 20 },
});

export default InitialScreen;