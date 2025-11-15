import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  ingresos: number;
  egresos: number;
};

export default function PieChart({ ingresos, egresos }: Props) {
  const total = ingresos + egresos || 1;

  // BARRA pastel
  const ingresoGrados = (ingresos / total) * 360;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gráfico Circular (Demo)</Text>

      {/* Círculo */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>

          {/* Mitad base (gris = egresos) */}
          <View style={[styles.half, styles.egresosColor]} />

          {/* Parte azul (ingresos), rotada según valor */}
          <View
            style={[
              styles.half,
              styles.ingresosColor,
              { transform: [{ rotate: `${ingresoGrados}deg` }] }
            ]}
          />

        </View>
      </View>

      {/* Leyenda */}
      <View style={styles.legend}>
        <View style={[styles.colorBox, { backgroundColor: '#2e86de' }]} />
        <Text>Ingresos: {ingresos}</Text>
      </View>
      <View style={styles.legend}>
        <View style={[styles.colorBox, { backgroundColor: '#d1d1d1' }]} />
        <Text>Egresos: {egresos}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 4,
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2e86de',
    marginBottom: 15,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  half: {
    width: 75,
    height: 150,
  },
  ingresosColor: {
    backgroundColor: '#2e86de',
    position: 'absolute',
    left: 75,
    top: 0,
  },
  egresosColor: {
    backgroundColor: '#d1d1d1',
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  colorBox: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
});
