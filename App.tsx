import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a tu app de gestion de presupuesto</Text>
      <Button label='Botón nuevo' backgroundColor='#ff0000'></Button>
      <Button label='Botón nuevo x2' backgroundColor='#00ff00'></Button>
      <Button label='Botón nuevo  x4' backgroundColor='#0000ff'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
