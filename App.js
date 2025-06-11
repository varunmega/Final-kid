import React from 'react';
import ChatScreen from './components/ChatScreen';
import MoodTracker from './components/MoodTracker';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MoodTracker />
      <ChatScreen />
    </View>
  );
}