import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>नमस्ते! आपका स्वागत है।</Text>
      <Text style={styles.subtitle}>ध्यान कोर्स चुनें</Text>
      {/* This button is for demonstration and will be replaced later */}
      <Button
        title="10 दिन की शांति (डेमो)"
        onPress={() => navigation.navigate('CourseDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', // Light beige background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 30,
  },
});

export default HomeScreen;
