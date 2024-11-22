import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Dapatkan dimensi layar
const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Gambar Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/hs.jpg")}
          style={styles.headerImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Welcome to MedApp!</Text>
          <Text style={styles.subHeaderText}>
            Your Daily Companion for Health and Wellness
          </Text>
        </View>
      </View>

      {/* Tombol Navigasi Cepat */}
      <View style={styles.quickLinks}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Explore")}
        >
          <Icon name="newspaper" size={24} color="#fff" />
          <Text style={styles.linkText}>Explore Health News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Tips")}
        >
          <Icon name="lightbulb-on" size={24} color="#fff" />
          <Text style={styles.linkText}>Daily Health Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="account-circle" size={24} color="#fff" />
          <Text style={styles.linkText}>Check Your Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Section Highlight */}
      <View style={styles.highlights}>
        <Text style={styles.sectionTitle}>What's New?</Text>
        <View style={styles.highlightCard}>
          <Text style={styles.highlightText}>
            🔍 Discover the latest health insights and trends.
          </Text>
        </View>
        <View style={styles.highlightCard}>
          <Text style={styles.highlightText}>
            💡 Get personalized tips to improve your daily life.
          </Text>
        </View>
        <View style={styles.highlightCard}>
          <Text style={styles.highlightText}>
            📅 Plan your health journey with expert advice.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f9fa',
        flexGrow: 1,
        paddingHorizontal: '5%',
        padding: 16,
        paddingBottom: 80,  
    },
    header: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerImage: {
        width: '100%',
        height: height * 0.3, // Gambar setinggi 30% dari layar
        resizeMode: 'cover',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    headerTextContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
    },
    subHeaderText: {
        fontSize: 16,
        color: '#34495e',
        textAlign: 'center',
        marginTop: 5,
    },
    quickLinks: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    linkButton: {
        backgroundColor: '#3498db',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        minWidth: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    linkText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
    highlights: {
        marginTop: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    highlightCard: {
        backgroundColor: '#eaf4fc',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    highlightText: {
        fontSize: 16,
        color: '#34495e',
    },
});

export default HomeScreen;
