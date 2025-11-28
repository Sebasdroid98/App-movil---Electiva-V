import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default function HomeScreen({ navigation }: any) {
  const [transactions, setTransactions] = useState<any[]>([]);

  const totalIngresos = transactions
    .filter((t: any) => t.type === 'ingreso')
    .reduce((sum: number, t: any) => sum + Number(t.amount || 0), 0);

  const totalEgresos = transactions
    .filter((t: any) => t.type === 'egreso')
    .reduce((sum: number, t: any) => sum + Number(t.amount || 0), 0);

  // 💰 TOTAL DISPONIBLE
  const totalDisponible = totalIngresos - totalEgresos;

  const pieData = [
    { name: 'Ingresos', amount: totalIngresos, color: '#4caf50', legendFontColor: '#333', legendFontSize: 14 },
    { name: 'Egresos', amount: totalEgresos, color: '#f44336', legendFontColor: '#333', legendFontSize: 14 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Resumen Financiero</Text>

      <View style={styles.cardsContainer}>
        <View style={[styles.card, { backgroundColor: '#e8f5e9' }]}>
          <Text style={styles.cardTitle}>Ingresos</Text>
          <Text style={styles.cardAmount}>${totalIngresos.toFixed(2)}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: '#ffebee' }]}>
          <Text style={styles.cardTitle}>Egresos</Text>
          <Text style={styles.cardAmount}>${totalEgresos.toFixed(2)}</Text>
        </View>
      </View>

      {/* 🟦 TOTAL DISPONIBLE */}
      <View style={[styles.card, styles.disponibleCard]}>
        <Text style={styles.cardTitle}>Total Disponible</Text>
        <Text style={[styles.cardAmount, { color: totalDisponible >= 0 ? '#2e7d32' : '#c62828' }]}>
          ${totalDisponible.toFixed(2)}
        </Text>
      </View>

      <PieChart
        data={pieData}
        width={Dimensions.get('window').width - 40}
        height={200}
        chartConfig={{ color: () => `rgba(0,0,0,0.7)` }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4caf50' }]}
          onPress={() => navigation.navigate('AddTransaction', { transactions, setTransactions, defaultType: 'ingreso' })}
        >
          <Text style={styles.buttonText}>Agregar Ingreso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#f44336' }]}
          onPress={() => navigation.navigate('AddTransaction', { transactions, setTransactions, defaultType: 'egreso' })}
        >
          <Text style={styles.buttonText}>Agregar Egreso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#2196f3' }]}
          onPress={() => navigation.navigate('History', { transactions, setTransactions })}
        >
          <Text style={styles.buttonText}>Historial</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#eef5ff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#2e86de' },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  card: {
    flex: 0.48,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },

  disponibleCard: {
    backgroundColor: '#e3f2fd',
    marginBottom: 20
  },

  cardTitle: { fontSize: 18, marginBottom: 10 },
  cardAmount: { fontSize: 22, fontWeight: 'bold' },

  buttonsContainer: { marginTop: 20 },
  button: { padding: 15, borderRadius: 10, marginBottom: 15, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
