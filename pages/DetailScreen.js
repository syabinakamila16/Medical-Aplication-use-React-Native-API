import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Share } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DetailScreen = ({ route, navigation }) => {
  // Menerima data artikel dari ExploreScreen (jika ada)
  const article = route.params?.article || {
    // Default artikel jika tidak ada data yang diterima
    title: "Default Article Title",
    author: "Default Author",
    description: "This is a default description for the article. Replace it with something meaningful.",
    content: "Default content is shown when no specific article is selected. You can replace this with any static content.",
    urlToImage: "https://via.placeholder.com/150",
    url: "https://example.com",
  };

  // Fungsi untuk berbagi artikel
  const shareArticle = async () => {
    try {
      await Share.share({
        message: `${article.title}\n\n${article.url}`,
      });
    } catch (error) {
      console.error('Error sharing article: ', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Tombol kembali */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
      </TouchableOpacity>

      {/* Gambar Artikel */}
      <Image source={{ uri: article.urlToImage }} style={styles.image} />

      {/* Konten Artikel */}
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.author}>{article.author || 'Unknown Author'}</Text>
        <Text style={styles.description}>{article.description}</Text>

        {/* Tombol untuk berbagi */}
        <TouchableOpacity onPress={shareArticle} style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share Article</Text>
        </TouchableOpacity>

        {/* Isi lengkap artikel */}
        <Text style={styles.fullText}>{article.content}</Text>
      </View>

      {/* Bottom Tools untuk navigasi tambahan */}
      <View style={styles.bottomTools}>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => navigation.navigate('TipsScreen')} // Arahkan ke halaman lain
        >
          <Text style={styles.moreText}>Explore More Articles</Text>
        </TouchableOpacity>
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
  backButton: {
    padding: 10,
    position: 'absolute',
    top: 30,
    left: 16,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 16,
  },
  content: {
    marginTop: 280, // Menyesuaikan dengan gambar di atas
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#777',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  fullText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  bottomTools: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  moreButton: {
    backgroundColor: '#0077cc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  moreText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
