import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useForm } from '../hooks/useForm';
import { AppContext } from '../context/AppContext';
import { useLoginUsuario } from '../hooks/useLoginUsuario';

export default function LoginScreen() {
  const { values, handleChange } = useForm({ email: '', password: '' });
  const { login } = useContext(AppContext);
    const { loginUsuario, loading } = useLoginUsuario();

  useEffect(() => {
    console.log('Pantalla Login cargada');
  }, []);

  async function handleLogin() {
    const result = await loginUsuario(values.email, values.password);

    if (!result.ok) {
      Alert.alert("Error", result.message);
      return;
    }

    // Guardar usuario en el contexto global
    login(result.user);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MI-FINANZA</Text>
      <Text style={styles.subtitle}>Controla tus ingresos y egresos</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={values.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={values.password}
        onChangeText={(text) => handleChange('password', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eaf4fc', padding: 20 },
  title: { fontSize: 34, fontWeight: 'bold', color: '#2e86de' },
  subtitle: { fontSize: 14, color: '#555', marginBottom: 30 },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2e86de',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
