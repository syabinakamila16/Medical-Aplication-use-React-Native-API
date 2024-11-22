import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header"; // Custom Header component
import Card from "../components/Card"; // Custom Card component
import data from "../data/data"; // Mock data or imported dataset
import profileImage from "../assets/p.jpg"; // Local profile image

function ProfileScreen() {
  const userProfile = {
    name: "Milaa",
    email: "mila@tekkomp@gmail.com",
    image: profileImage, // Menggunakan gambar lokal
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header headerText={"Welcome to MedApp!"} flexPosition={"center"} />

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={userProfile.image} style={styles.profileImage} />
        <Text style={styles.profileName}>{userProfile.name}</Text>
        <Text style={styles.profileEmail}>{userProfile.email}</Text>
      </View>

      {/* FlatList Section */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data} // Menggunakan data dari data.js
        renderItem={({ item }) => <Card dataNama={item} />} // Menampilkan data menggunakan Card
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCFFFF", // Latar belakang lebih lembut
    padding: 16,
  },
  header: {
    paddingVertical: 20,
    marginBottom: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  headerText: {
    fontSize: 50, // Lebih besar untuk kesan kuat
    fontWeight: "bold", // Gunakan font tebal untuk menambah kesan kuat
    color: "#FFFFFF",
    textAlign: "center", // Teks di tengah
    textTransform: "uppercase", // Semua huruf besar untuk menambah kesan penting
    letterSpacing: 2, // Sedikit jarak antar huruf untuk estetika
    fontFamily: "Roboto", // Pilih font modern
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#4A90E2",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 6,
  },
  profileEmail: {
    fontSize: 16,
    color: "#777777",
    marginBottom: 16,
  },
  editButton: {
    flexDirection: "row",
    backgroundColor: "#4A90E2", // Warna biru lebih profesional
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  editButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  listContainer: {
    paddingBottom: 16,
  },
});

export default ProfileScreen;
