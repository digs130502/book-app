import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

// Mock data for setting options
const settingsOptions = [
  "Account Information",
  "Notifications",
  "Privacy",
  "Theme",
  "Language",
  "Help & Support",
  "About",
  "Terms & Conditions",
  "Logout",
];

export default function SettingsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered options based on search query
  const filteredOptions = settingsOptions.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search settings..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <ScrollView>
        {filteredOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.settingButton}>
            <Text style={styles.settingText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  settingButton: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 10,
  },
  settingText: {
    fontSize: 16,
  },
});
