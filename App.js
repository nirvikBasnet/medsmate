import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Homepage';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AsyncStorage from '@react-native-community/async-storage';






export default function App() {
  //to check if the user is logged in or not
  const [isLoggedin, setLogged] = useState(false);


  const Stack = createStackNavigator();
  //checking if we have the token

  const detectLogin =async ()=> {
    const value = await AsyncStorage.getItem('token')
    if (value) {
      setLogged(true);

    } else {
      setLogged(false);

    }

  }
  useEffect(() => {

  
    detectLogin();

  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode='none'
      >
        {
        isLoggedin==true ?(
          <>

          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />

          </>

        )
        
           
          :
          (
            <>
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />

            <Stack.Screen name="Home" component={HomePage} />
            </>
          )

        }



      </Stack.Navigator>
    </NavigationContainer>


  );
}

