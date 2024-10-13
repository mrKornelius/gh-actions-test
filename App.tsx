import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [toggle, setToggle] = useState(false);
  let x = 0;
  useEffect(() => {
    if (toggle) {
      x = 2;
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>{x}</Text>
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
