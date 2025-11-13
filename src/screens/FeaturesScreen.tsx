import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles from './styles/FeaturesScreen';
import useChartData from '../hooks/useChartData';

export default function FeaturesScreen() {
  const screenWidth = Dimensions.get('window').width;
  const { chartData } = useChartData(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Finanza</Text>

      <View style={{flexDirection:'row'}}>
        <View>
          <Text style={styles.subtitle}>Total ingresos</Text>
          <View style={styles.bar} />
        </View>
        <View>
          <Text style={styles.subtitle}>Total egresos</Text>
          <View style={styles.bar} />
        </View>
      </View>


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

      <Text style={styles.footer}>Resultado actualizado en tiempo real.</Text>
    </View>
  );
}