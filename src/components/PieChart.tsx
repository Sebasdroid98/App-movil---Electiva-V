import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  ingresos: number;
  egresos: number;
  size?: number;
};

export default function PieChart({ ingresos, egresos, size = 140 }: Props) {
  const total = ingresos + egresos || 1;
  const ingresoDeg = (ingresos / total) * 360;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Balance</Text>
      <View style={[styles.circleContainer, { width: size, height: size }]}>
        <View style={[styles.circle, { width: size, height: size, borderRadius: size/2 }]}>
          <View style={[styles.half, styles.egresos, { width: size/2, height: size }]} />
          <View
            style={[
              styles.half,
              styles.ingresos,
              { width: size/2, height: size, transform: [{ rotate: `${ingresoDeg}deg` }], left: size/2, top: 0, position: 'absolute' },
            ]}
          />
        </View>
      </View>

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
  wrapper: { alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 12, marginVertical: 10 },
  title: { fontWeight: '700', color: '#2e86de', marginBottom: 8 },
  circleContainer: { alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  circle: { overflow: 'hidden', flexDirection: 'row' },
  half: {},
  ingresos: { backgroundColor: '#2e86de', position: 'absolute' },
  egresos: { backgroundColor: '#d1d1d1' },
  legend: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  colorBox: { width: 14, height: 14, marginRight: 8 },
});
