import React from 'react';
import { View, Text, ScrollView, TouchableOpacity , Platform , StatusBar,StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import { EggFriedIcon, FlagIcon, FlameIcon, GemIcon, HeartIcon, HomeIcon, Settings2Icon, SettingsIcon, TrophyIcon, UserCogIcon, UserIcon } from 'lucide-react-native';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import ZigZagScroll from '../flowchart';

export default function HomeScreen() {
  const router = useRouter();
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0.5;

  return (
    <View className="flex-1 bg-gray-50">
     <ZigZagScroll />
      </View>
  );
}
