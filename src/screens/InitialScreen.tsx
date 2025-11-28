import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

const welcomeImage = require('../../assets/hom.png');
const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Initial'>;

export default function InitialScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop} />
      <View style={styles.gradientBottom} />

      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <View style={styles.card}>
        <Image source={welcomeImage} style={styles.heroImage} />
        <Text style={styles.mainTitle}>¡Bienvenido a Mi-Finanza!</Text>
        <Text style={styles.subtitle}>Tu aliado para una gestión financiera clara y sin esfuerzo.</Text>

        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.primaryButtonText}>Empezar a Administrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // usa los estilos que ya tenías, mantenidos
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' },
  gradientTop: { position: 'absolute', top: 0, left: 0, right: 0, height: height * 0.6, backgroundColor: '#E3F2FD' },
  gradientBottom: { position: 'absolute', bottom: 0, left: 0, right: 0, height: height * 0.4, backgroundColor: '#BBDEFB' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 25, padding: 30, width: '85%', alignItems: 'center', elevation: 10, zIndex: 1 },
  heroImage: { width: 180, height: 180, borderRadius: 90, borderColor: '#BBDEFB', borderWidth: 4, marginBottom: 30 },
  mainTitle: { fontSize: 28, fontWeight: 'bold', color: '#2C3E50', textAlign: 'center', marginBottom: 15 },
  subtitle: { fontSize: 16, color: '#7F8C8D', textAlign: 'center', lineHeight: 24, marginBottom: 40 },
  primaryButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2e86de', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 30 },
  primaryButtonText: { fontSize: 17, color: '#FFFFFF', fontWeight: '600' },
});
