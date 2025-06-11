import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function MoodTracker() {
  const emojis = ["😄", "😐", "😢"];
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", padding: 10 }}>
      <Text>How do you feel today? </Text>
      {emojis.map((emoji, idx) => (
        <TouchableOpacity key={idx}><Text style={{ fontSize: 24 }}>{emoji}</Text></TouchableOpacity>
      ))}
    </View>
  );
}