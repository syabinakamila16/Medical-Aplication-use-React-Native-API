import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator, Linking, ScrollView, image} from 'react-native';
import { fetchTips } from '../utils/api';

const TipsScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTips = async () => {
      try {
        const tipsArticles = await fetchTips(); // Ambil artikel tips
        setArticles(tipsArticles); // Set data artikel ke state
      } catch (error) {
        console.error("Error fetching tips:", error);
      } finally {
        setLoading(false);
      }
    };

    getTips();
  }, []);

  const renderTipItem = ({ item }) => (
    <View style={styles.tipItem}>
      <Text style={styles.tipTitle}>{item.title}</Text>
      <Text style={styles.tipDescription}>{item.description || 'No description available'}</Text>
      <TouchableOpacity
        style={styles.readMoreButton}
        onPress={() => Linking.openURL(item.url)} // Buka URL artikel di browser
      >
        <Text style={styles.readMoreText}>Read more</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
        <ActivityIndicator size="large" color="#0077cc" />
      </View>
    </ScrollView>
     
    );
  }

 return (
  <View style={styles.container}>
    <FlatList
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderTipItem}
      contentContainerStyle={styles.listContainer}
    />
    <View style={styles.bottomTools}>
      <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('More')}>
        <Text style={styles.moreText}>See More Tips</Text>
      </TouchableOpacity>
    </View>
  </View>
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
  listContainer: {
    paddingBottom: 100, // Memberikan ruang pada bagian bawah agar tombol tidak terpotong
  },
  tipItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  tipTitle: {
    fontSize: 20,
    fontFamily: 'Lora',
    color: '#FF6F61',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tipDescription: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#6E7C7C',
    marginBottom: 15,
  },
  readMoreButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  readMoreText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomTools: {
    padding: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  moreButton: {
    backgroundColor: '#0077cc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  moreText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#6E7C7C',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default TipsScreen;
