import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BookMarkedIcon, HomeIcon, TrophyIcon, UserIcon } from 'lucide-react-native';

export const Footer = () => {
  const router = useRouter();
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => router.push('/home')}>
        <View style={styles.iconContainer}>
          <HomeIcon color="black" size={30} />
          <Text style={styles.iconText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/leaderboard')}>
        <View style={styles.iconContainer}>
          <TrophyIcon color="black" size={30} />
          <Text style={styles.iconText}>Leaderboard</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/feed')}>
        <View style={styles.iconContainer}>
          <BookMarkedIcon color="black" size={30} />
          <Text style={styles.iconText}>Feed</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/profile')}>
        <View style={styles.iconContainer}>
          <UserIcon color="black" size={30} />
          <Text style={styles.iconText}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#0D9488',
    fontWeight: 'bold',
    paddingTop: 5,
  },
});