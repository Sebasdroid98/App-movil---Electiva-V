import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import PieChart from '../components/PieChart';

export default function HomeScreen() {
  const { user, logout } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Bienvenido, {user}!</Text>

      {/* === GRÁFICO CIRCULAR PRUEBA === */}
      <PieChart ingresos={1200000} egresos={500000} />

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff' 
  },
  welcome: { 
    fontSize: 20, 
    color: '#2e86de', 
    marginBottom: 20 
  },
  subtitle: { 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 5,
    marginTop: 20
  },
  ingreso: { 
    color: '#555', 
    marginBottom: 5 
  },
  button: { 
    backgroundColor: '#2e86de', 
    padding: 10, 
    borderRadius: 10, 
    marginTop: 20 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
});
