import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar,
  ScrollView, // Usamos ScrollView para permitir el desplazamiento si hay mucho contenido
} from 'react-native';
import FeaturesScreen from './FeaturesScreen';
import InitialScreen from './InitialScreen';


const HomeScreen = () => {
  // const handleGoBack = () => {
  //   navigation.goBack(); 
  // };

  const handleSettings = () => {
    console.log('Navegar a ajustes');
  };

  const handleAddTransaction = () => {
    // Aquí la lógica para añadir un nuevo ingreso/egreso
    console.log('Añadir nueva transacción');
  };
    
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" /> 

      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerIconLeft}
        >
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Mi Finanza</Text>

        <TouchableOpacity 
          style={styles.headerIconRight}
          onPress={handleSettings}
        >
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollViewContent}>

        <InitialScreen />

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Balance Actual</Text>
          <Text style={styles.balanceAmount}>$ 1,250.75</Text>
          <View style={styles.balanceDetails}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemText}>Ingresos: $1,500.00</Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemText}>Egresos: $249.25</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Últimas Transacciones</Text>
        <View style={styles.transactionsContainer}>
          <View style={styles.transactionItem}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Compras Supermercado</Text>
              <Text style={styles.transactionCategory}>Alimentos</Text>
            </View>
            <Text style={styles.transactionAmount}>- $85.50</Text>
          </View>
          <View style={styles.transactionItem}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Salario Mensual</Text>
              <Text style={styles.transactionCategory}>Ingreso</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: '#2ECC71' }]}>+ $1200.00</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
        <View style={styles.quickActionsGrid}>
          <TouchableOpacity style={styles.quickActionItem}>
            <Text style={styles.quickActionText}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Text style={styles.quickActionText}>Reportes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Text style={styles.quickActionText}>Presupuesto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Text style={styles.quickActionText}>Tarjetas</Text>
          </TouchableOpacity>
        </View>

        <FeaturesScreen/>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={handleAddTransaction}>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC', // Un blanco muy suave, casi gris claro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF', // Fondo blanco para el encabezado
    borderBottomWidth: 1,
    borderBottomColor: '#ECEFF1', // Borde sutil
    shadowColor: '#000', // Sombra ligera para el encabezado
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  headerIconLeft: {
    padding: 5,
  },
  headerIconRight: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  // --- Tarjeta de Balance ---
  balanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    marginTop: 100,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 38,
    fontWeight: '700',
    color: '#2e86de', // Azul principal de la app
    marginBottom: 20,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F0F4F8',
  },
  balanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceItemText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
    fontWeight: '500',
  },
  // --- Secciones Generales ---
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginTop: 10,
  },
  // --- Transacciones ---
  transactionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 25,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F9FC',
  },
  lastChild: {
      borderBottomWidth: 0,
  },
  transactionIcon: {
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  transactionCategory: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E74C3C', // Rojo para egresos
  },
  // --- Acciones Rápidas ---
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30, // Espacio al final de la pantalla
  },
  quickActionItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: '48%', // Dos columnas
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionText: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  // --- FAB ---
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2e86de', // Azul principal de la app
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2e86de',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 15,
  },
});

export default HomeScreen;