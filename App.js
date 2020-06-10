import  React, {useState} from 'react';
import { StyleSheet,View, Text, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Homepage';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';






export default function App() {


  const Stack = createStackNavigator();
    return (
      <NavigationContainer>
      <Stack.Navigator
     
      >
        
      <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  
  
  );
}

