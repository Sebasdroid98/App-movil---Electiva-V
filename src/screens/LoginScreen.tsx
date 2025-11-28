import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useForm } from "../hooks/useForm";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
  const { values, handleChange } = useForm({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MI-FINANZA</Text>
      <Text style={styles.subtitle}>Controla tus ingresos y egresos</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={values.email}
        onChangeText={(t) => handleChange("email", t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={values.password}
        onChangeText={(t) => handleChange("password", t)}
      />

      <TouchableOpacity style={styles.button} onPress={login(values)}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaf4fc",
    padding: 20,
  },
  title: { 
    fontSize: 34, 
    fontWeight: "bold", 
    color: "#2e86de" 
  },
  subtitle: { 
    fontSize: 14, 
    color: "#555", 
    marginBottom: 30 
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#2e86de",
    borderRadius: 10,
    padding: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16 
  },
});
