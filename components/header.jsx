import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlagIcon, FlameIcon, GemIcon, HeartIcon } from 'lucide-react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <FlagIcon color="black" size={30} />
      </View>
      <View style={styles.iconContainer}>
        <FlameIcon color="black" size={30} />
      </View>
      <View style={styles.iconContainer}>
        <GemIcon color="black" size={30} />
      </View>
      <View style={styles.iconContainer}>
        <HeartIcon color="black" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E5E7EB',
    padding: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});