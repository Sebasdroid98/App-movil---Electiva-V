import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default function FeaturesScreen() {
  const screenWidth = Dimensions.get('window').width;

  const chartData = [
    {
      name: 'Ingresos 1',
      population: 45,
      color: '#00C49F',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Egresos 1',
      population: 25,
      color: '#FF4D4D',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Balance',
      population: 30,
      color: '#00BCD4',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Finanza</Text>

      <Text style={styles.subtitle}>Total ingresos</Text>
      <View style={styles.bar} />

      <Text style={styles.subtitle}>Total egresos</Text>
      <View style={styles.bar} />

      <Text style={styles.sectionTitle}>Balance</Text>

      <PieChart
        data={chartData}
        width={screenWidth * 0.8}
        height={180}
        chartConfig={{
          color: () => '#000',
          labelColor: () => '#333',
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="10"
        center={[0, 0]}
        hasLegend={true}
      />

      <View style={styles.barsContainer}>
        <View style={styles.smallBar} />
      </View>

      <Text style={styles.footer}>Resultado actualizado en tiempo real.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
  bar: {
    width: 180,
    height: 15,
    backgroundColor: '#7CFC00',
    borderRadius: 10,
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    color: '#333',
  },
  barsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  smallBar: {
    width: 120,
    height: 15,
    backgroundColor: '#7CFC00',
    borderRadius: 10,
    marginVertical: 6,
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#333',
  },
});