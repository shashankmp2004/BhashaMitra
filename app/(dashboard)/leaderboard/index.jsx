import React from 'react';
import { View, Text, FlatList, StyleSheet, Image,Platform,StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Footer } from '../../../components/footer';


const data = [
  { id: '1', rank: 1, name: 'Alice', points: 2500, avatar: 'https://via.placeholder.com/50' },
  { id: '2', rank: 2, name: 'Bob', points: 2200, avatar: 'https://via.placeholder.com/50' },
  { id: '3', rank: 3, name: 'Charlie', points: 2000, avatar: 'https://via.placeholder.com/50' },
  // Add more data as needed
];


const Leaderboard = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.rankContainer}>
        <Text style={styles.rankText}>{item.rank}</Text>
      </View>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.points}>{item.points} pts</Text>
      </View>
    </View>
  );
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0.5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  rankContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  points: {
    fontSize: 14,
    color: '#777',
  },
});

export default Leaderboard;
