import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function MyBooksScreen() {
  // Handler function to show an alert for each section
  const handlePress = (section: string) => {
    Alert.alert(`${section}`, `Navigating to ${section} screen...`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.section}
        onPress={() => handlePress("My Books")}
      >
        <Text style={styles.sectionText}>My Books</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => handlePress("Read")}
      >
        <Text style={styles.sectionText}>Read</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => handlePress("Currently Reading")}
      >
        <Text style={styles.sectionText}>Currently Reading</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => handlePress("Create New Shelf")}
      >
        <Text style={styles.sectionText}>Create New Shelf</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  section: {
    width: "100%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    alignItems: "center",
  },
  sectionText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
