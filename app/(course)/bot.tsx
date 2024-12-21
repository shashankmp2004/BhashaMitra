import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

interface Message {
  id: string;
  type: 'text' | 'audio' | 'image';
  content: string;
  isUser: boolean;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Request permissions on component mount
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status: imageStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const { status: audioStatus } = await Audio.requestPermissionsAsync();
        if (imageStatus !== 'granted' || audioStatus !== 'granted') {
          alert('Sorry, we need camera roll and audio permissions to make this work!');
        }
      }
    })();
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'text',
      content: inputText,
      isUser: true,
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 1000));
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'text',
        content: 'This is a simulated AI response.',
        isUser: false,
      };
      setMessages(prev => [...prev, aiResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      
      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;

    setIsRecording(false);
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      if (uri) {
        const newMessage: Message = {
          id: Date.now().toString(),
          type: 'audio',
          content: uri,
          isUser: true,
        };
        setMessages(prev => [...prev, newMessage]);
      }
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
    setRecording(null);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'image',
        content: result.assets[0].uri,
        isUser: true,
      };
      setMessages(prev => [...prev, newMessage]);
    }
  };

  const renderMessage = (message: Message) => {
    const isUser = message.isUser;
    return (
      <View
        key={message.id}
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.botMessage,
        ]}
      >
        {message.type === 'text' && (
          <Text style={styles.messageText}>{message.content}</Text>
        )}
        {message.type === 'image' && (
          <Image source={{ uri: message.content }} style={styles.messageImage} />
        )}
        {message.type === 'audio' && (
          <TouchableOpacity style={styles.audioButton}>
            <Ionicons name="play" size={24} color="#FFFFFF" />
            <Text style={styles.audioText}>Play Audio</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map(renderMessage)}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#FFFFFF" />
          </View>
        )}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
          <Ionicons name="image" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={isRecording ? stopRecording : startRecording}
          style={[styles.iconButton, isRecording && styles.recordingButton]}
        >
          <Ionicons name={isRecording ? "stop" : "mic"} size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          placeholderTextColor="#666666"
        />
        
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 8,
    padding: 12,
    borderRadius: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#2B2B2B',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#363636',
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  messageImage: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  audioText: {
    color: '#FFFFFF',
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2B2B2B',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#363636',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    color: '#FFFFFF',
  },
  iconButton: {
    padding: 8,
  },
  sendButton: {
    padding: 8,
  },
  recordingButton: {
    backgroundColor: '#FF4444',
    borderRadius: 20,
  },
  loadingContainer: {
    padding: 16,
    alignItems: 'center',
  },
});