import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { fetchHealthNews } from '../utils/api'; // Pastikan fetchHealthNews di file utils/api.js ada

const NewsListDetailScreen = () => {
  const [filteredNews, setFilteredNews] = useState([]); // Berita yang difilter
  const [loading, setLoading] = useState(true); // Status loading

  // Ambil dan filter berita dari API saat komponen pertama kali di-mount
  useEffect(() => {
    const getFilteredNews = async () => {
      try {
        const data = await fetchHealthNews(); // Panggil API untuk berita kesehatan
        // Filter berita yang mengandung kata 'fitness' di judul
        const filtered = data.filter(article =>
          article.title?.toLowerCase().includes('fitness')
        );
        setFilteredNews(filtered);
      } catch (error) {
        console.error('Error fetching filtered news:', error);
      } finally {
        setLoading(false); // Set status loading selesai
      }
    };

    getFilteredNews();
  }, []);

  // Fungsi untuk merender setiap item berita dalam FlatList
  const renderNewsItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {/* Gambar berita */}
      <Image
        source={{ uri: item.urlToImage || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        {/* Judul berita */}
        <Text style={styles.title}>{item.title}</Text>
        {/* Deskripsi berita */}
        <Text numberOfLines={2} style={styles.description}>
          {item.description || 'No description available.'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header layar */}
      <Text style={styles.header}>Filtered News: Fitness</Text>
      {/* Tampilkan spinner jika masih loading */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFA500" />
      ) : filteredNews.length === 0 ? (
        // Tampilkan pesan jika tidak ada berita ditemukan
        <Text style={styles.noDataText}>No news found for this filter.</Text>
      ) : (
        // Tampilkan daftar berita jika data tersedia
        <FlatList
          data={filteredNews}
          keyExtractor={(item, index) => index.toString()} // Menggunakan index sebagai key
          renderItem={renderNewsItem} // Fungsi render item
          contentContainerStyle={styles.listContainer} // Gaya FlatList
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
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
  noDataText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default NewsListDetailScreen;
