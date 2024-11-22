import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>More Tips</Text>
      <Text style={styles.text}>Here, you can display more tips, articles, or other content!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F4E1C1',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6E7C7C',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default MoreScreen;
