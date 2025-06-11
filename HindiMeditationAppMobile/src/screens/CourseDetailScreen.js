import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>कोर्स का विवरण</Text>
      <Text>यह कोर्स का विवरण पेज है।</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CourseDetailScreen;
