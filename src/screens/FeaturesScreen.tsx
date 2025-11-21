import React from 'react';
import { View, Text, Dimensions, Button } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles from './styles/FeaturesScreen';
import useChartData from '../hooks/useChartData';
import { RootStackParamList } from '../navigation/RootNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Definimos los parametros que llegan a la pantalla
type Props = NativeStackScreenProps<RootStackParamList, 'Features'>;

export default function FeaturesScreen({navigation}:Props) {
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
      <Button
        title="Ir a Pantalla inicial"
        onPress={() => navigation.navigate('Initial')}
        />
    </View>
  );
}