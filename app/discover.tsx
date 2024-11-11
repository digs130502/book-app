import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

// Mock data for book categories
const sections = [
  {
    title: "Trending Books",
    data: [
      {
        id: "1",
        title: "Trending Book 1",
        cover: "https://via.placeholder.com/100",
      },
      {
        id: "2",
        title: "Trending Book 2",
        cover: "https://via.placeholder.com/100",
      },
      {
        id: "3",
        title: "Trending Book 3",
        cover: "https://via.placeholder.com/100",
      },
    ],
  },
  {
    title: "Rom-Coms",
    data: [
      {
        id: "4",
        title: "Rom-Com Book 1",
        cover: "https://via.placeholder.com/100",
      },
      {
        id: "5",
        title: "Rom-Com Book 2",
        cover: "https://via.placeholder.com/100",
      },
      {
        id: "6",
        title: "Rom-Com Book 3",
        cover: "https://via.placeholder.com/100",
      },
    ],
  },
  {
    title: "Thrillers",
    data: [
      {
        id: "7",
        title: "Thriller Book 1",
        cover: "https://via.placeholder.com/100",
      },
      {
        id: "8",
        title: "Thriller Book 2",
        cover: "https://via.placeholder.com/100",
      },
      {
        id: "9",
        title: "Thriller Book 3",
        cover: "https://via.placeholder.com/100",
      },
    ],
  },
];

export default function DiscoverScreen() {
  return (
    <ScrollView style={styles.container}>
      {sections.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <FlatList
            data={section.data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.bookItem}>
                <Image source={{ uri: item.cover }} style={styles.bookCover} />
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bookItem: {
    marginRight: 10,
  },
  bookCover: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
});
