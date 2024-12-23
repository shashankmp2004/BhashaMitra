import React from "react";
import { TouchableOpacity, StyleSheet, Animated, Text } from "react-native";
import { useTheme } from "@/context/theme";
import { View } from "./themed";

const ThemeConsumerComponent = () => {
  const { toggleTheme, theme } = useTheme();
  const [isEnabled, setIsEnabled] = React.useState(theme === 'dark');
  const toggleAnimValue = React.useRef(new Animated.Value(isEnabled ? 1 : 0)).current;

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    Animated.spring(toggleAnimValue, {
      toValue: newValue ? 1 : 0,
      useNativeDriver: false,
      bounciness: 12,
    }).start();
    toggleTheme();
  };

  const translateX = toggleAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22]
  });

  const sunOpacity = toggleAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });

  const moonOpacity = toggleAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  return (
    <View style={styles.footer}>
      <Text style={styles.switchText}>Switch theme</Text>
      <TouchableOpacity 
        style={styles.toggleContainer} 
        activeOpacity={0.8}
        onPress={toggleSwitch}
      >
        <Animated.View style={[styles.sunIcon, { opacity: sunOpacity }]}>
          {/* Sun rays */}
          {[...Array(8)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.sunRay,
                {
                  transform: [
                    { rotate: `${index * 45}deg` },
                  ],
                },
              ]}
            />
          ))}
          <View style={styles.sunCore} />
        </Animated.View>

        <Animated.View style={[styles.moonIcon, { opacity: moonOpacity }]}>
          <View style={styles.moonCrater} />
        </Animated.View>

        <Animated.View 
          style={[
            styles.thumb,
            { transform: [{ translateX }] }
          ]} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  switchText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
  toggleContainer: {
    width: 50,
    height: 26,
    borderRadius: 15,
    backgroundColor: '#1a1a1a',
    padding: 2,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#ffffff',
    position: 'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  moonIcon: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#ffd43b',
    position: 'absolute',
    left: 4,
    shadowColor: "#ffd43b",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  moonCrater: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1a1a1a',
    position: 'absolute',
    left: 4,
    top: -4,
  },
  sunIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    left: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunCore: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ffd43b',
    position: 'absolute',
    shadowColor: "#ffd43b",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  sunRay: {
    position: 'absolute',
    width: 4,
    height: 1,
    backgroundColor: '#ffd43b',
    left: '50%',
    marginLeft: -2,
    top: '50%',
    marginTop: -0.5,
    transformOrigin: 'left center',
    shadowColor: "#ffd43b",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default ThemeConsumerComponent;

