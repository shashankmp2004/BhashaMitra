import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Footer } from '../../../components/footer';
import * as Linking from 'expo-linking';

// Get the status bar height based on platform
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

const LessonCard = ({ title, description, icon, color, url }) => {
  const handlePress = () => {
    if (url) {
      Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
    }
  };

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={handlePress}>
      <Icon name={icon} size={30} color="white" />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </TouchableOpacity>
  );
};

const Feed = () => {
  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <Text style={styles.header}>Feed</Text>
      <ScrollView style={styles.view}>
        

        <LessonCard
          title="Basics 1"
          description="Learn essential phrases and vocabulary"
          icon="book"
          color="#58CC02"
          url="https://www.google.com"
        />
        <LessonCard
          title="Greetings"
          description="Master common greetings and introductions"
          icon="handshake-o"
          color="#CE82FF"
          url="https://www.google.com"
        />
        <LessonCard
          title="Food"
          description="Explore food-related vocabulary and phrases"
          icon="cutlery"
          color="#FF9600"
          url="https://www.google.com"
        />
        <LessonCard
          title="Family"
          description="Learn words for family members and relationships"
          icon="users"
          color="#2B70C9"
          url="https://www.google.com"
        />
         <LessonCard
          title="Family"
          description="Learn words for family members and relationships"
          icon="users"
          color="#2B70C9"
          url="https://www.google.com"
        />
         <LessonCard
          title="Family"
          description="Learn words for family members and relationships"
          icon="users"
          color="#2B70C9"
          url="https://www.google.com"
        />
         <LessonCard
          title="Family"
          description="Learn words for family members and relationships"
          icon="users"
          color="#2B70C9"
          url="https://www.google.com"
        />
         <LessonCard
          title="Family"
          description="Learn words for family members and relationships"
          icon="users"
          color="#2B70C9"
          url="https://www.google.com"
        />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  view: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: "center",
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Feed;
