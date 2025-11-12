import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';
// Importamos los iconos
import Icon from 'react-native-vector-icons/Feather';



//  nombre de tu imagen.
const profileImage = require('../assets/home.png');

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />

      {/* --- Encabezado Gris Curvo --- */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings" size={26} color="#E53935" />
        </TouchableOpacity>
      </View>

      {/* --- Imagen de Perfil (Superpuesta) --- */}
      <Image source={profileImage} style={styles.profileImage} />

      {/* --- Contenido Principal --- */}
      <View style={styles.content}>
        <Text style={styles.title}>Mi Finanza</Text>

        {/* --- Botón Verde Principal --- */}
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Control de Ingresos y Egresos</Text>
        </TouchableOpacity>
      </View>

      {/* --- Botón Flotante (FAB) '+' --- */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="plus" size={28} color="#ffffff" />
      </TouchableOpacity>

      {/* --- Puntos decorativos (Opcional) --- */}
      <View style={[styles.dot, styles.dot1]} />
      <View style={[styles.dot, styles.dot2]} />
      <View style={[styles.dot, styles.dot3]} />
    </View>
  );
};

// --- Hoja de Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fondo blanco
  },
  header: {
    backgroundColor: '#f0f0f0', // Gris claro del mockup
    height: 190, // Altura del fondo gris
    borderBottomLeftRadius: 50, // Curva inferior izquierda
    borderBottomRightRadius: 50, // Curva inferior derecha
  },
  settingsButton: {
    position: 'absolute',
    top: 50, // Ajusta según la barra de estado
    left: 25,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Círculo perfecto
    borderColor: '#ffffff',
    borderWidth: 4,
    // --- Este es el truco para superponer la imagen ---
    alignSelf: 'center', // Centra la imagen
    marginTop: -60, // Sube la imagen (la mitad de su altura)
    // ------------------------------------------------
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15,
  },
  mainButton: {
    backgroundColor: '#9CFE9C', // Verde claro del mockup
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30, // Bordes bien redondeados
    marginTop: 20,
    // Sombra ligera
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  mainButtonText: {
    fontSize: 16,
    color: '#333', // Texto oscuro como en el mockup
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#32CD32', // Verde más fuerte
    justifyContent: 'center',
    alignItems: 'center',
    // Sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  // --- Puntos Decorativos ---
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E53935', // Rojo
    position: 'absolute',
  },
  dot1: {
    top: 240, // Ajusta posiciones
    left: 35,
  },
  dot2: {
    top: 330,
    right: 45,
  },
  dot3: {
    bottom: 110,
    left: 55,
  },
});

export default HomeScreen;