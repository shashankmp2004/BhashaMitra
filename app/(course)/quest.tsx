import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Scenario {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface Conversation {
  id: string;
  speaker: string;
  text: string;
}

const scenarios: Scenario[] = [
  {
    id: '1',
    title: 'In a Class',
    icon: 'school',
    description: 'Learn common phrases used in a classroom setting.',
  },
  {
    id: '2',
    title: 'On a Bus',
    icon: 'bus',
    description: 'Practice conversations you might have while using public transportation.',
  },
  {
    id: '3',
    title: 'At a Restaurant',
    icon: 'restaurant',
    description: 'Master the art of ordering food and interacting with waitstaff.',
  },
  {
    id: '4',
    title: 'At the Airport',
    icon: 'airplane',
    description: 'Navigate through common airport situations and conversations.',
  },
  {
    id: '5',
    title: 'Shopping',
    icon: 'cart',
    description: 'Learn how to ask for items, prices, and make purchases.',
  },
];

const conversations: { [key: string]: Conversation[] } = {
  'In a Class': [
    { id: '1', speaker: 'Teacher', text: 'Good morning, class!' },
    { id: '2', speaker: 'Students', text: 'Good morning, teacher!' },
    { id: '3', speaker: 'Teacher', text: 'Today, we\'ll be learning about...' },
    { id: '4', speaker: 'Student', text: 'Excuse me, may I ask a question?' },
    { id: '5', speaker: 'Teacher', text: 'Of course, go ahead.' },
  ],
  'On a Bus': [
    { id: '1', speaker: 'Passenger', text: 'Excuse me, is this seat taken?' },
    { id: '2', speaker: 'You', text: 'No, it\'s free. Please, have a seat.' },
    { id: '3', speaker: 'Passenger', text: 'Thank you. Do you know when the next stop is?' },
    { id: '4', speaker: 'You', text: 'I believe it\'s in about 5 minutes.' },
    { id: '5', speaker: 'Passenger', text: 'Great, thanks for your help!' },
  ],
  'At a Restaurant': [
    { id: '1', speaker: 'Waiter', text: 'Good evening! Welcome to our restaurant. Here are your menus.' },
    { id: '2', speaker: 'You', text: 'Thank you. Could you tell us about today\'s specials?' },
    { id: '3', speaker: 'Waiter', text: 'Today we have a grilled salmon with lemon butter sauce...' },
    { id: '4', speaker: 'Friend', text: 'That sounds delicious. I\'ll have that, please.' },
    { id: '5', speaker: 'You', text: 'And I\'ll try the vegetarian pasta, please.' },
  ],
  'At the Airport': [
    { id: '1', speaker: 'You', text: 'Excuse me, where can I find the check-in counter for flight AB123?' },
    { id: '2', speaker: 'Staff', text: 'The check-in counters are in Terminal B. Follow the signs, please.' },
    { id: '3', speaker: 'You', text: 'Thank you. And how early should I arrive at the gate?' },
    { id: '4', speaker: 'Staff', text: 'We recommend being at the gate at least 30 minutes before departure.' },
    { id: '5', speaker: 'You', text: 'Great, thank you for your help!' },
  ],
  'Shopping': [
    { id: '1', speaker: 'You', text: 'Excuse me, do you have this shirt in a medium size?' },
    { id: '2', speaker: 'Salesperson', text: 'Let me check for you. Yes, we do have it in medium.' },
    { id: '3', speaker: 'You', text: 'Perfect. And how much does it cost?' },
    { id: '4', speaker: 'Salesperson', text: 'It\'s $29.99. Would you like to try it on?' },
    { id: '5', speaker: 'You', text: 'Yes, please. Where are the fitting rooms?' },
  ],
};

export default function ScenarioQuests() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  const renderScenarioItem = ({ item }: { item: Scenario }) => (
    <TouchableOpacity
      style={styles.scenarioItem}
      onPress={() => setSelectedScenario(item.title)}
    >
      <View style={styles.scenarioIcon}>
        <Ionicons name={item.icon as any} size={24} color="#FFFFFF" />
      </View>
      <View style={styles.scenarioInfo}>
        <Text style={styles.scenarioTitle}>{item.title}</Text>
        <Text style={styles.scenarioDescription}>{item.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666666" />
    </TouchableOpacity>
  );

  const renderConversation = (item: Conversation, index: number) => (
    <View key={item.id} style={styles.conversationItem}>
      <View style={[styles.avatar, { backgroundColor: item.speaker === 'You' ? '#4CAF50' : '#2196F3' }]}>
        <Text style={styles.avatarText}>{item.speaker[0]}</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.speakerName}>{item.speaker}</Text>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {selectedScenario ? (
        <View style={styles.conversationView}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setSelectedScenario(null)} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{selectedScenario}</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {conversations[selectedScenario]?.map(renderConversation)}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.questView}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Conversation Quests</Text>
          </View>
          <FlatList
            data={scenarios}
            renderItem={renderScenarioItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2B2B2B',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  questView: {
    flex: 1,
  },
  conversationView: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
  scenarioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  scenarioIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  scenarioInfo: {
    flex: 1,
  },
  scenarioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  scenarioDescription: {
    fontSize: 14,
    color: '#999999',
  },
  scrollContent: {
    padding: 16,
  },
  conversationItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageContainer: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    padding: 12,
  },
  speakerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#CCCCCC',
  },
});

