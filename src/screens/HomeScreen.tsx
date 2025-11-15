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

// --- IMPORTACIONES DE NAVEGACIÓN (Añadidas) ---
import { StackScreenProps } from '@react-navigation/stack'; 
// Define la estructura de tu stack de navegación (debe coincidir con App.tsx)
type RootStackParamList = {
    Home: undefined; 
    InitialScreen: undefined; 
    Settings: undefined;
};
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
// ----------------------------------------------


// --- RUTA DE IMAGEN CORREGIDA ---
const profileImage = require('../../assets/hom.png');

// Aceptamos la prop `navigation`
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    
  // Función para manejar el "botón de volver"
  const handleGoBack = () => {
    // Vuelve a la pantalla anterior en el stack
    navigation.goBack(); 
  };
    
  return (
    <View style={styles.container}>
      {/* Barra de estado blanca para que el texto resalte sobre el fondo rojo */}
      <StatusBar barStyle="light-content" backgroundColor="#B71C1C" /> 

      {/* --- 1. Encabezado Curvo (Rojo Vivo) --- */}
      <View style={styles.header}>
        {/* Botón de VOLVER/RETROCESO */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleGoBack}
        >
          <Icon name="arrow-left" size={26} color="#ffffff" /> 
        </TouchableOpacity>
        
        {/* Botón de AJUSTES */}
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="settings" size={26} color="#ffffff" />
        </TouchableOpacity>

        {/* --- Saludo y título --- */}
        <View style={styles.headerContent}>
          <Text style={styles.greetingText}>Hola, Usuario</Text>
          <Text style={styles.headerTitle}>Mi Finanza</Text>
        </View>
      </View>

      {/* --- 2. Imagen de Perfil (Con Borde Elegante) --- */}
      <Image source={profileImage} style={styles.profileImage} />

      {/* --- 3. Contenido Principal: Tarjeta de Balance --- */}
      <View style={styles.content}>
        
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Balance Actual</Text>
          <Text style={styles.balanceAmount}>$1,250.75</Text>
        </View>

        {/* --- 4. Botón Principal de Acción (Verde Esmeralda) --- */}
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Control de Ingresos y Egresos</Text>
        </TouchableOpacity>

        {/* --- 5. Sección de Acciones Rápidas --- */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.quickActionsTitle}>Acciones Rápidas</Text>
          
          <View style={styles.quickActionsRow}>
            {/* Opción 1: Reporte */}
            <TouchableOpacity style={styles.actionItem}>
              <Icon name="file-text" size={24} color="#333" />
              <Text style={styles.actionItemText}>Reporte</Text>
            </TouchableOpacity>
            
            {/* Opción 2: Transferir */}
            <TouchableOpacity style={styles.actionItem}>
              <Icon name="repeat" size={24} color="#333" />
              <Text style={styles.actionItemText}>Transferir</Text>
            </TouchableOpacity>
            
            {/* Opción 3: Presupuesto */}
            <TouchableOpacity style={styles.actionItem}>
              <Icon name="pie-chart" size={24} color="#333" />
              <Text style={styles.actionItemText}>Presupuesto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* --- 6. Botón Flotante (FAB) '+' (para añadir transacción) --- */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="plus" size={28} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

// --- Hoja de Estilos Rediseñada ---
const styles = StyleSheet.create({
  // Colores Base: Rojo Oscuro (#B71C1C), Esmeralda (#10B981), Gris Suave (#F5F5F5)
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fondo muy suave
  },
  header: {
    backgroundColor: '#B71C1C', // Rojo Oscuro
    height: 250, 
    borderBottomLeftRadius: 60, 
    borderBottomRightRadius: 60, 
    paddingTop: 40,
  },
  headerContent: {
    alignItems: 'center',
    marginTop: 10,
  },
  greetingText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  backButton: {
    position: 'absolute',
    top: 55, 
    left: 20,
    zIndex: 10,
  },
  settingsButton: {
    position: 'absolute',
    top: 55, 
    right: 20, 
    zIndex: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    borderColor: '#ffffff', // Borde blanco
    borderWidth: 5,
    alignSelf: 'center', 
    marginTop: -50, // Lo sube para superponerlo con el encabezado
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 6,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  // --- Tarjeta de Balance (Nueva) ---
  balanceCard: {
    width: '100%',
    backgroundColor: '#ffffff', 
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: '700',
    color: '#B71C1C', // Rojo para el balance
  },
  // --- Botón Principal de Acción ---
  mainButton: {
    backgroundColor: '#10B981', // Verde Esmeralda
    width: '100%',
    paddingVertical: 18,
    borderRadius: 12, 
    marginTop: 30,
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  mainButtonText: {
    fontSize: 18,
    color: '#ffffff', 
    fontWeight: '700',
    textAlign: 'center',
  },
  // --- Acciones Rápidas ---
  quickActionsContainer: {
    width: '100%',
    marginTop: 30,
    padding: 10,
  },
  quickActionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionItem: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 3,
  },
  actionItemText: {
    fontSize: 12,
    marginTop: 8,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  // --- FAB ---
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#10B981', // Verde Esmeralda para acción principal
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 10,
    elevation: 15,
  },
});

export default HomeScreen;