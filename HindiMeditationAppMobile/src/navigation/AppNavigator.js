import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'मुख्य पृष्ठ' }} // Home Page
        />
        <Stack.Screen 
          name="CourseDetail" 
          component={CourseDetailScreen} 
          options={{ title: 'कोर्स विवरण' }} // Course Details
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
