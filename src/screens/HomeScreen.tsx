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
// Importamos la interfaz para las props de navegación (si usas TypeScript)
import { StackScreenProps } from '@react-navigation/stack'; 

// Define la estructura de tu stack de navegación para TypeScript
// Reemplaza 'RootStackParamList' con el nombre de tu propia lista de parámetros
type RootStackParamList = {
    Home: undefined; // Esta es la pantalla actual
    InitialScreen: undefined; // Asume que esta es tu pantalla 'inicial'
    Settings: undefined;
    // Agrega aquí todas tus otras pantallas
};

// Define las props de la pantalla HomeScreen
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

//  nombre de tu imagen.
const profileImage = require('../assets/home.png');

// Acepta la prop `navigation`
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  
  // Función para manejar el "botón de volver"
  const handleGoBack = () => {
    // Si quieres volver a la pantalla anterior en el stack
    navigation.goBack(); 
    
    // O si quieres ir específicamente a una pantalla llamada 'InitialScreen'
    // navigation.navigate('InitialScreen'); 
  };
    
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import PieChart from '../components/PieChart';

export default function HomeScreen() {
  const { user, logout } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />

      {/* --- Encabezado Gris Curvo --- */}
      <View style={styles.header}>
        {/* --- Botón de VOLVER/AJUSTES (Modificado) --- */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleGoBack} // Llama a la función de navegación
        >
          {/* Cambiamos el icono a 'arrow-left' para indicar retroceso */}
          <Icon name="arrow-left" size={26} color="#E53935" />
        </TouchableOpacity>
        
        {/* Agregamos el botón de Ajustes en otro lado si quieres mantenerlo */}
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings" size={26} color="#333" />
        </TouchableOpacity>
      </View>

      {/* El resto de tu componente ... */}
      <Image source={profileImage} style={styles.profileImage} />

      <View style={styles.content}>
        <Text style={styles.title}>Mi Finanza</Text>
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Control de Ingresos y Egresos</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.fab}>
        <Icon name="plus" size={28} color="#ffffff" />
      </TouchableOpacity>

      <View style={[styles.dot, styles.dot1]} />
      <View style={[styles.dot, styles.dot2]} />
      <View style={[styles.dot, styles.dot3]} />
    </View>
  );
};

// --- Hoja de Estilos (Solo cambios relevantes) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#f0f0f0',
    height: 190,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  // Nuevo estilo para el botón de retroceso
  backButton: {
    position: 'absolute',
    top: 50, // Ajusta según la barra de estado
    left: 25,
    zIndex: 10, // Asegura que esté por encima del resto del header si es necesario
    padding: 5, // Aumenta el área de toque
  },
  // Ajustamos la posición del botón de ajustes para que no choque
  settingsButton: {
    position: 'absolute',
    top: 50, 
    right: 25, // Lo movemos a la derecha
    padding: 5,
  },
  // ... el resto de tus estilos permanece igual ...
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#ffffff',
    borderWidth: 4,
    alignSelf: 'center',
    marginTop: -60,
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
    backgroundColor: '#9CFE9C',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  mainButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E53935',
    position: 'absolute',
  },
  dot1: {
    top: 240,
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