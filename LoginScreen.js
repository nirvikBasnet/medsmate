import React, { Component, useState } from 'react';
import {View, StyleSheet , Alert} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';



const LoginScreen = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const sendCred= async (props)=>{
    fetch("http://192.168.1.144:3000/signin",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "password":password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('token',data.token)
             props.navigation.replace("Home")
           } catch (e) {
             Alert.alert("Wrong Crendentials!!","Please check your username and password and try Again!!")
            
           }
    })
 }


  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Welcome To MedsMate" />
      </Appbar.Header>

      <TextInput

        clearButtonMode="always"

        label='Email'
        email
         onChangeText={(text)=>setEmail(text)}

      />
      <TextInput
        clearButtonMode="always"
        label='Password'
        secureTextEntry={true}
        onChangeText={(text)=>setPassword(text)}


      />

      <Button icon="login" mode="contained" onPress={() => sendCred(props)}>
        Login
    </Button>
      <Button icon="login" mode="contained" color='orange' onPress={()=>props.navigation.navigate("Signup")}>
        SignUp Instead
</Button>

    </View>
  );
}



const styles = StyleSheet.create({


  inputext: {
    fontSize: 20,
    flex: 1,
    alignContent: "center",
    justifyContent: 'center'





  }
});

export default LoginScreen;