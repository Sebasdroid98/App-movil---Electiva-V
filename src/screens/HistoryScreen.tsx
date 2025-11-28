import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default function HistoryScreen({ route, navigation }: any) {
  const { transactions, setTransactions } = route.params;

  const totalIngresos = transactions
    .filter((t: any) => t.type === 'ingreso')
    .reduce((sum: number, t: any) => sum + Number(t.amount || 0), 0);

  const totalEgresos = transactions
    .filter((t: any) => t.type === 'egreso')
    .reduce((sum: number, t: any) => sum + Number(t.amount || 0), 0);

  const pieData = [
    { name: 'Ingresos', amount: totalIngresos, color: '#4caf50', legendFontColor: '#333', legendFontSize: 14 },
    { name: 'Egresos', amount: totalEgresos, color: '#f44336', legendFontColor: '#333', legendFontSize: 14 },
  ];

  const handleReset = () => {
    Alert.alert(
      'Reiniciar historial',
      '¿Seguro que quieres eliminar todas las transacciones?',
      [
        { text: 'Cancelar' },
        { 
          text: 'Eliminar', 
          onPress: () => {
            setTransactions([]);
            navigation.goBack();  // ⬅️ ACTUALIZA HOME Y CIERRA
          } 
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Historial de transacciones</Text>

      {transactions.map((t: any, i: number) => (
        <View key={i} style={styles.transactionCard}>
          <Text>{t.type.toUpperCase()}: {t.description} - ${Number(t.amount).toFixed(2)}</Text>
        </View>
      ))}

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

      <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
        <Text style={styles.resetText}>Reiniciar historial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#eef5ff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: '#2e86de' },
  transactionCard: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 8 },
  resetBtn: { backgroundColor: '#f44336', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  resetText: { color: '#fff', fontWeight: '700' },
});
