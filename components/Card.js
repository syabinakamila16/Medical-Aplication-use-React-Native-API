import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ dataNama }) => {
  // Memastikan gambar diakses dengan benar
  const imageSource =
  dataNama.image 
    ? dataNama.image // Jika gambar lokal
    : { uri: dataNama.imageUrl }; // Jika gambar dari URL

    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image 
          source={imageSource}
           style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{dataNama.name}</Text>
            <Text style={styles.cardSubtitle}>{dataNama.email}</Text>
          </View>
        </View>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    width: 300,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 180,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#777",
  },
});

export default Card;
