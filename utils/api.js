import axios from 'axios';

const API_KEY = '9cf3e4ffdc814e2abdb075f714935b70'; // Ganti dengan API key yang benar
const BASE_URL = 'https://newsapi.org/v2/';

// Fungsi generik untuk mendapatkan berita berdasarkan query
const fetchNews = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}everything?q=${query}&apiKey=${API_KEY}`);
    return response.data.articles; // Mengembalikan artikel yang diterima dari API
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error; // Jika error, lemparkan ke atas untuk ditangani
  }
};

// Fungsi untuk mendapatkan berita kesehatan
export const fetchHealthNews = async () => {
  return await fetchNews('health'); // Menggunakan query 'health' untuk kesehatan
};


// Fungsi untuk mendapatkan berita tips
export const fetchTips = async () => {
  return await fetchNews('tips'); // Menggunakan query 'tips' untuk mendapatkan berita tips
};
