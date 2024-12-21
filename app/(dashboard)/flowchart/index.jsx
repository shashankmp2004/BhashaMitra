import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Platform, StatusBar, Alert, Modal } from 'react-native';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import * as Progress from 'react-native-progress';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

const ZigZagScroll = () => {
  const [completedLessons, setCompletedLessons] = useState([false, false, false, false, false, false, false, false, false, false]);
  const [progress, setProgress] = useState(Array(10).fill(0));
  const [modalVisible, setModalVisible] = useState(false);
  const [lessonDescription, setLessonDescription] = useState('');
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const buttons = Array.from({ length: 10 }, (_, index) => `Button ${index + 1}`);
  const lessonDescriptions = Array.from({ length: 10 }, (_, index) => `Description for Lesson ${index + 1}`);

  const handleProgress = (index) => {
    const updatedProgress = [...progress];
    if (updatedProgress[index] < 1) {
      updatedProgress[index] += 0.1;
      setProgress(updatedProgress);

      if (updatedProgress[index] >= 1) {
        handleCompleteLesson(index);
      }
    }
  };

  const handleCompleteLesson = (index) => {
    const updatedLessons = [...completedLessons];
    updatedLessons[index] = true;
    setCompletedLessons(updatedLessons);
    Alert.alert(`Lesson ${index + 1} completed!`, `You can now access the next lesson.`);
  };

  const openModal = (index) => {
    setCurrentLessonIndex(index);
    setLessonDescription(lessonDescriptions[index]);
    setModalVisible(true);
  };

  const startLesson = () => {
    // Handle start lesson logic here
    setModalVisible(false);
    // Additional logic for starting the lesson
  };

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {buttons.map((buttonLabel, index) => (
          <View key={index} style={styles.buttonWrapper}>
            <View
              style={[
                styles.buttonContainer,
                index % 2 === 0 ? styles.leftAligned : styles.rightAligned,
              ]}
            >
              <View style={styles.progressContainer}>
                <Progress.Circle
                  progress={progress[index]}
                  size={120}
                  thickness={5}
                  color="#6cc24a"
                  borderWidth={0}
                  showsText={false}
                  style={styles.progressCircle}
                />
                <TouchableOpacity
                  style={[styles.roundButton, { opacity: (index === 0 || completedLessons[index - 1]) ? 1 : 0.5 }]}
                  onPress={() => openModal(index)}
                  disabled={!(index === 0 || completedLessons[index - 1])}
                >
                  <Text style={styles.buttonText}>{buttonLabel}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {index < buttons.length - 1 && (
              <View
                style={[
                  styles.ladderContainer,
                  index % 2 === 0 ? styles.ladderLeft : styles.ladderRight,
                ]}
              >
                <View style={styles.ladder}>
                  <View style={styles.redDot} />
                  <View style={styles.redDot} />
                  <View style={styles.redDot} />
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <Footer style={styles.footer} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Lesson {currentLessonIndex + 1}</Text>
            <Text style={styles.modalDescription}>{lessonDescription}</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.startButton]}
                onPress={startLesson}
              >
                <Text style={styles.modalButtonText}>Start Lesson</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// ... (keep all the imports and component code the same until the styles) ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  leftAligned: {
    alignSelf: 'flex-start',
    paddingLeft: 150,
  },
  rightAligned: {
    alignSelf: 'flex-end',
    paddingRight: 150,
  },
  progressContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#6cc24a',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: 'absolute',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ladderContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ladderLeft: {
    transform: [{ rotate: '-45deg' }],
    marginLeft: -25,
  },
  ladderRight: {
    transform: [{ rotate: '45deg' }],
    marginRight: -25,
  },
  ladder: {
    width: 160,
    height: 15,
    backgroundColor: '#E5E7EB',
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  redDot: {
    width: 5,
    height: 5,
    backgroundColor: 'green',
    borderRadius: 2.5,
    marginHorizontal: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#E5E7EB',
    padding: 10,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  modalButton: {
    padding: 10,
    borderRadius: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ff4444',
    marginRight: 10,
  },
  startButton: {
    backgroundColor: '#6cc24a',
    marginLeft: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ZigZagScroll;