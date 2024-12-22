import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "@/context/theme";
import { View } from "./themed";

const ThemeConsumerComponent = () => {
    const { toggleTheme } = useTheme();
  
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
          <Text style={styles.toggleButtonText}>Toggle Theme</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
      footer: {
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
        backgroundColor: "#000",
        padding: 5,
        borderRadius: 8,
      },
      toggleButton: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 8,
      },
      toggleButtonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
      },
    });
  
  export default ThemeConsumerComponent;