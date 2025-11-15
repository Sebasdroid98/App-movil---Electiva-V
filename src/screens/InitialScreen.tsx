// src/screens/InitialScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native';

// --- IMAGEN DE BIENVENIDA ---
// Asegúrate de que esta ruta sea correcta para tu imagen.
// Usaré 'hom.png' como referencia si no tienes otra específica.
const welcomeImage = require('../../assets/hom.png');

const { height } = Dimensions.get('window');

const InitialScreen = () => {
  return (
    <View style={styles.container}>
      {/* Primer color del degradado (parte superior) */}
      <View style={styles.gradientTop} />
      {/* Segundo color del degradado (parte inferior) */}
      <View style={styles.gradientBottom} />

      {/* Barra de estado con contenido oscuro o claro, dependiendo del fondo principal de arriba */}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* --- Contenido Central (Tarjeta Flotante) --- */}
      <View style={styles.card}>
        {/* --- Imagen de Bienvenida --- */}
        <Image
          source={welcomeImage}
          style={styles.heroImage}
        />

        {/* --- Título y Subtítulo --- */}
        <Text style={styles.mainTitle}>¡Bienvenido a Mi-Finanza!</Text>
        <Text style={styles.subtitle}>
          Tu aliado para una gestión financiera clara y sin esfuerzo.
        </Text>

        {/* --- Botón de Acción Principal --- */}
        <TouchableOpacity
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>
            Empezar a Administrar
          </Text>
          {/* <Icon name="chevron-right" size={20} color="#FFFFFF" style={styles.buttonIcon} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  // --- Simulación de Degradado ---
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.6, // Cubre el 60% superior de la pantalla
    backgroundColor: '#E3F2FD', // Azul muy claro (similar al #eaf4fc del login)
  },
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.4, // Cubre el 40% inferior
    backgroundColor: '#BBDEFB', // Un azul un poco más oscuro
  },
  // --- Tarjeta Central Flotante ---
  card: {
    backgroundColor: '#FFFFFF', // Fondo blanco de la tarjeta
    borderRadius: 25,
    padding: 30,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 20, // Sombra prominente para el efecto flotante
    zIndex: 1, // Asegura que la tarjeta esté encima del degradado
  },
  // --- Estilos de la Imagen ---
  heroImage: {
    width: 180,
    height: 180,
    borderRadius: 90, // Circular
    borderColor: '#BBDEFB', // Borde que complementa el fondo
    borderWidth: 4,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  // --- Estilos de Texto ---
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50', // Azul oscuro
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D', // Gris medio
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  // --- Estilos del Botón Principal ---
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e86de', // Azul vibrante del LoginScreen
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#2e86de',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },
  primaryButtonText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '600',
    marginRight: 10,
  },
  buttonIcon: {
    // Estilo opcional para el ícono
  },
});

export default InitialScreen;