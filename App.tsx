import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      setToggle(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>{toggle}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
