import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { CpuIcon, LockIcon, SettingsIcon, TrophyIcon } from 'lucide-react-native';
import { Footer } from '../../../components/footer';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Avatar and Name */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.avatar} 
        />
       
        
       
      </View>
      <View>
      <Text style={styles.username}>Venkata Lokesh Vemuri</Text>
      <Text style={styles.level}>Level 5</Text>
      </View>
      {/* XP Progress */}
      <View style={styles.xpContainer}>
        <Text style={styles.xpText}>XP: 1450 / 2000</Text>
        <ProgressBarAndroid 
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.725} 
          color="#4CAF50"
        />
      </View>

      {/* Buttons for Achievements, Settings, and Account */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}><TrophyIcon color="black"/> Achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}><SettingsIcon color="black"/>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}><LockIcon color="black"/> Account</Text>
        </TouchableOpacity>
      </View>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d5db',
    // padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
    height: 250,
    marginTop: 0,
    width: '100%',
    backgroundColor:'#000000',
    

   },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 40,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign:"center"
  },
  level: {
    fontSize: 16,
    color: '#000000',
     textAlign:"center"
  },
  xpContainer: {
    marginVertical: 9,
    paddingHorizontal: 10,
    backgroundColor:'#ffffff',
    padding:10,
    borderRadius:10,
    width:'100%',
  },
  xpText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    width:'90%',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
