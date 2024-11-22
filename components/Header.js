import React from "react";
import { Text, View, StyleSheet } from "react-native"; // Perbaiki impor untuk hanya sekali
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const Header = ({ headerText, flexPosition }) => {
  const flexPositionStyle = flexPosition ? flexPosition : "center";

  return (
    <LinearGradient
      colors={["#4A90E2", "#50C9CE"]} // Gradasi warna untuk background header
      style={[styles.header, { justifyContent: flexPositionStyle }]}>
      <Text style={styles.headerText}>{headerText}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
});

export default Header;
