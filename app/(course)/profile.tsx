import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Achievement {
  id: string;
  title: string;
  progress: number;
  total: number;
  icon: string;
}

interface Stats {
  xp: number;
  level: number;
  streak: number;
  hearts: number;
}

export default function ProfileScreen() {
  const [stats, setStats] = useState<Stats>({
    xp: 500,
    level: 1,
    streak: 356,
    hearts: 5,
  });

  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Daily Quests',
      progress: 0,
      total: 10,
      icon: 'star',
    },
    {
      id: '2',
      title: 'Lessons Completed',
      progress: 15,
      total: 30,
      icon: 'book',
    },
    {
      id: '3',
      title: 'Perfect Scores',
      progress: 5,
      total: 10,
      icon: 'trophy',
    },
  ]);

  const renderProgressBar = (progress: number, total: number) => {
    const percentage = (progress / total) * 100;
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${percentage}%` }]} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://www.svgrepo.com/show/446475/avatar.svg?height=150&width=150' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.username}>Shashank Padanad</Text>
        <Text style={styles.subtitle}>Level #2</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Ionicons name="flash" size={24} color="#FFD700" />
          <Text style={styles.statValue}>{stats.xp}</Text>
          <Text style={styles.statLabel}>XP</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="flame" size={24} color="#FF4444" />
          <Text style={styles.statValue}>{stats.streak}</Text>
          <Text style={styles.statLabel}>Streak</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="heart" size={24} color="#FF69B4" />
          <Text style={styles.statValue}>{stats.hearts}</Text>
          <Text style={styles.statLabel}>Hearts</Text>
        </View>
      </View>

      {/* Achievements Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        {achievements.map((achievement) => (
          <View key={achievement.id} style={styles.achievementItem}>
            <View style={styles.achievementHeader}>
              <View style={styles.achievementIcon}>
                <Ionicons name={achievement.icon as any} size={24} color="#FFFFFF" />
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementProgress}>
                  {achievement.progress} / {achievement.total}
                </Text>
              </View>
            </View>
            {renderProgressBar(achievement.progress, achievement.total)}
          </View>
        ))}
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="person-outline" size={24} color="#FFFFFF" />
          <Text style={styles.settingText}>Edit Profile</Text>
          <Ionicons name="chevron-forward" size={24} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
          <Text style={styles.settingText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={24} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="language-outline" size={24} color="#FFFFFF" />
          <Text style={styles.settingText}>Language</Text>
          <Ionicons name="chevron-forward" size={24} color="#666666" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2B2B2B',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2B2B2B',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#363636',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#2B2B2B',
    marginVertical: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  section: {
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  achievementItem: {
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  achievementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  achievementProgress: {
    fontSize: 14,
    color: '#666666',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#363636',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  settingText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
});