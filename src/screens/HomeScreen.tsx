import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function HomeScreen() {
  const { user, logout } = useContext(AppContext);

  // Ejemplo de lista para aplicar "listas y objetos literales"
  const ingresos = [
    { id: 1, concepto: 'Pensión', valor: 1200000 },
    { id: 2, concepto: 'Renta', valor: 450000 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Bienvenido, {user}!</Text>

      <Text style={styles.subtitle}>Tus ingresos:</Text>
      {ingresos.map((item) => (
        <Text key={item.id} style={styles.ingreso}>
          {item.concepto}: ${item.valor}
        </Text>
      ))}

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  welcome: { fontSize: 20, color: '#2e86de', marginBottom: 20 },
  subtitle: { fontWeight: 'bold', color: '#333', marginBottom: 5 },
  ingreso: { color: '#555', marginBottom: 5 },
  button: { backgroundColor: '#2e86de', padding: 10, borderRadius: 10, marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
