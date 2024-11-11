import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Mock data for testing search functionality
const mockBooks = [
  { id: "1", title: "Book One" },
  { id: "2", title: "Another Book" },
  { id: "3", title: "The Best Book" },
  { id: "4", title: "Interesting Read" },
  { id: "5", title: "Bookish Adventures" },
  { id: "6", title: "Learning React Native" },
];

export default function FindScreen() {
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);

  // Filter books based on the search query
  const handleSearch = (text: string) => {
    setQuery(text);
    if (text) {
      const results = mockBooks.filter((book) =>
        book.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBooks(results);
    } else {
      setFilteredBooks(mockBooks);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a book..."
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyMessage}>No books found</Text>
        )}
      />
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
  bookItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 16,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 20,
  },
});
