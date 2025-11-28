import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AddTransactionScreen({ navigation, route }: any) {
  const { transactions, setTransactions, defaultType } = route.params;

  const [type, setType] = useState<'ingreso' | 'egreso'>(defaultType);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSave = () => {
    const numAmount = Number(amount);
    if (!description || isNaN(numAmount) || numAmount <= 0) {
      Alert.alert('Error', 'Llena todos los campos correctamente');
      return;
    }

    setTransactions([{ type, description, amount: numAmount }, ...transactions]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar transacción</Text>

      <Text style={styles.label}>Tipo</Text>
      <View style={styles.typeContainer}>
        <TouchableOpacity style={[styles.typeBtn, type === 'ingreso' && styles.selected]} onPress={() => setType('ingreso')}>
          <Text style={type === 'ingreso' ? styles.typeTextSelected : styles.typeText}>Ingreso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.typeBtn, type === 'egreso' && styles.selected]} onPress={() => setType('egreso')}>
          <Text style={type === 'egreso' ? styles.typeTextSelected : styles.typeText}>Egreso</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Descripción</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Ej: Pensión" />

      <Text style={styles.label}>Monto</Text>
      <TextInput style={styles.input} value={amount} onChangeText={setAmount} placeholder="Ej: 1200000" keyboardType="numeric" />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#eef5ff' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12, color: '#2e86de', textAlign: 'center' },
  label: { marginTop: 8, color: '#333' },
  typeContainer: { flexDirection: 'row', marginTop: 8 },
  typeBtn: { flex: 1, padding: 10, backgroundColor: '#fff', marginRight: 6, borderRadius: 8, alignItems: 'center' },
  selected: { backgroundColor: '#2e86de' },
  typeText: { color: '#333' },
  typeTextSelected: { color: '#fff' },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginTop: 6, borderWidth: 1, borderColor: '#ccc' },
  saveBtn: { backgroundColor: '#2e86de', padding: 14, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  saveText: { color: '#fff', fontWeight: '700' },
});
