import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';
import axios from 'axios';

const BACKEND_URL = "http://YOUR_BACKEND_URL"; // Replace with actual backend URL

export default function ChatScreen() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/chat`, {
        message,
        age: 7,
      });
      setChat([...chat, { from: "me", text: message }, { from: "bot", text: res.data.response }]);
      setMessage("");
    } catch (error) {
      setChat([...chat, { from: "bot", text: "Oops! Something went wrong." }]);
    }
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      {chat.map((msg, i) => (
        <Text key={i}>{msg.from === "me" ? "👧 " : "🤖 "}{msg.text}</Text>
      ))}
      <TextInput value={message} onChangeText={setMessage} placeholder="Say something..." style={{ borderWidth: 1, padding: 10 }} />
      <Button title="Send" onPress={sendMessage} />
    </ScrollView>
  );
}