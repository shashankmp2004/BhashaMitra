import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LeaderboardUser {
  id: string;
  name: string;
  score: number;
  rank: number;
  avatar: string;
}

type LeaderboardCategory = 'xp' | 'streak' | 'lessons';

const leaderboardData: Record<LeaderboardCategory, LeaderboardUser[]> = {
  xp: [
    { id: '1', name: 'John Doe', score: 15000, rank: 1, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '2', name: 'Jane Smith', score: 14500, rank: 2, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '3', name: 'Bob Johnson', score: 14000, rank: 3, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '4', name: 'Alice Brown', score: 13500, rank: 4, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '5', name: 'Charlie Davis', score: 13000, rank: 5, avatar: '/placeholder.svg?height=50&width=50' },
  ],
  streak: [
    { id: '1', name: 'Emma Wilson', score: 365, rank: 1, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '2', name: 'Liam Anderson', score: 300, rank: 2, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '3', name: 'Olivia Taylor', score: 250, rank: 3, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '4', name: 'Noah Martinez', score: 200, rank: 4, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '5', name: 'Ava Thompson', score: 180, rank: 5, avatar: '/placeholder.svg?height=50&width=50' },
  ],
  lessons: [
    { id: '1', name: 'Sophia Lee', score: 500, rank: 1, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '2', name: 'Jackson White', score: 450, rank: 2, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '3', name: 'Isabella Clark', score: 400, rank: 3, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '4', name: 'Aiden Hall', score: 350, rank: 4, avatar: '/placeholder.svg?height=50&width=50' },
    { id: '5', name: 'Mia Scott', score: 300, rank: 5, avatar: '/placeholder.svg?height=50&width=50' },
  ],
};

export default function LeaderboardsPage() {
  const [activeCategory, setActiveCategory] = useState<LeaderboardCategory>('xp');

  const renderLeaderboardItem = ({ item }: { item: LeaderboardUser }) => (
    <View style={styles.leaderboardItem}>
      <Text style={styles.rank}>{item.rank}</Text>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userScore}>
          {activeCategory === 'xp' && `${item.score} XP`}
          {activeCategory === 'streak' && `${item.score} day streak`}
          {activeCategory === 'lessons' && `${item.score} lessons`}
        </Text>
      </View>
      {item.rank <= 3 && (
        <Ionicons 
          name="trophy" 
          size={24} 
          color={item.rank === 1 ? '#FFD700' : item.rank === 2 ? '#C0C0C0' : '#CD7F32'} 
        />
      )}
    </View>
  );

  const renderCategoryTab = (category: LeaderboardCategory, icon: string, label: string) => (
    <TouchableOpacity
      style={[styles.categoryTab, activeCategory === category && styles.activeCategoryTab]}
      onPress={() => setActiveCategory(category)}
    >
      <Ionicons name={icon as any} size={24} color={activeCategory === category ? '#FFFFFF' : '#999999'} />
      <Text style={[styles.categoryLabel, activeCategory === category && styles.activeCategoryLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leaderboards</Text>
      </View>
      <View style={styles.categoryTabs}>
        {renderCategoryTab('xp', 'flash', 'XP')}
        {renderCategoryTab('streak', 'flame', 'Streak')}
        {renderCategoryTab('lessons', 'book', 'Lessons')}
      </View>
      <FlatList
        data={leaderboardData[activeCategory]}
        renderItem={renderLeaderboardItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2B2B2B',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2B2B2B',
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeCategoryTab: {
    backgroundColor: '#363636',
  },
  categoryLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#999999',
  },
  activeCategoryLabel: {
    color: '#FFFFFF',
  },
  listContainer: {
    padding: 16,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: 30,
    textAlign: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userScore: {
    fontSize: 14,
    color: '#999999',
  },
});

