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
    },
    toggleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#2B2B2B",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    toggleButtonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
      marginLeft:8,
    },
  });
  
  export default ThemeConsumerComponent;