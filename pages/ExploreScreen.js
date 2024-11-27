import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, TouchableOpacity, TextInput } from 'react-native';
import { fetchHealthNews } from '../utils/api';

const ExploreScreen = ({ navigation }) => {
  const [news, setNews] = useState([]); // State untuk semua berita
  const [filteredNews, setFilteredNews] = useState([]); // State untuk berita yang sudah difilter
  const [loading, setLoading] = useState(true); // State loading
  const [searchQuery, setSearchQuery] = useState(''); // State untuk search query

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchHealthNews(); // Fetch health news from API
        setNews(data); // Set fetched news data to state
        setFilteredNews(data); // Set filtered news data (initially same as all news)
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      // Filter news based on search query
      const filtered = news.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNews(filtered);
    } else {
      // If search query is empty, show all news
      setFilteredNews(news);
    }
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { article: item })} // Navigate to NewsDetailScreen
    >
      <Image source={{ uri: item.urlToImage || 'https://via.placeholder.com/150' }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Health News</Text>

      {/* Button to navigate to Health category */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', { category: 'Health' })} // Navigate to Health category
        style={styles.categoryButton}
      >
        <Text style={styles.categoryText}>Go to Health News</Text>
      </TouchableOpacity>

      {/* Search bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search news..."
        value={searchQuery}
        onChangeText={handleSearch} // Update search query
      />

      {/* Show loading indicator or news list */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFA500" />
      ) : (
        <FlatList
          data={filteredNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderNewsItem}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 10,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  categoryButton: {
    backgroundColor: '#4CAF50', // Green for category button
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
