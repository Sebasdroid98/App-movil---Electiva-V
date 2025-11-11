import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
    label: string;
    backgroundColor?: string;
    colorText?: string;

    // Acciones
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function Button(
{
    label,
    backgroundColor = "#007AFF",
    colorText = "#000000",
    onPress,
    onLongPress,
}: Props)
{
  // Se definen los estilos
  const styles = StyleSheet.create({
    basic: {
      backgroundColor: "#007AFF",
      color: "#000",
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      borderRadius: 10
    }
  });

  return (
    <Pressable
      style={[
        styles.basic, {backgroundColor},
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: colorText, fontSize: 20}}>{label}</Text>
    </Pressable>
  )
}