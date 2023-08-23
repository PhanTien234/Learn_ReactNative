import { React, useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [message, setMessage] = useState("Hello World!");

  const changeMessage = () => {
    setMessage("Hello from React Native!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Change Message" onPress={changeMessage} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
};