import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ProfileScreen from '../(dashboard)/profile';

const CreateUsernameScreen = () => {
    const [username, setUsername] = useState('');
    
  const handleUsernameSubmit = () => {
    if (username.trim() === '') {
      Alert.alert('Invalid Username', 'Please enter a valid username.');
      return;
    }
    <ProfileScreen name={username} />
    // Perform any backend validation or API call to save the username
    // Assuming it's valid, navigate to the home screen:
    router.push('/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleUsernameSubmit}>
        <Text style={styles.buttonText}>Continue</Text>
        
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export const username = {username};
export default CreateUsernameScreen;
