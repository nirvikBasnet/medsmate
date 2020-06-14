import React,{useState} from 'react';
import { Text,Alert,View, StyleSheet } from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import { Appbar} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';


const SignupScreen =(props)=>{

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  


  const sendCred= async (props)=>{
    fetch("http://192.168.1.144:3000/signup",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":username,
       "password":password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('token',data.token)
             props.navigation.replace("Home")
           } catch (e) {
             Alert.alert("Error Occured!", "Please fill the required fields")
             console.log("error",e)
           }
    })
 }


 
    return (
      <View>
       <Appbar.Header>
       <Appbar.Content title="Sign Up" />
    </Appbar.Header>
      
    <TextInput

                label='Username'
                value ={username}
                onChangeText={(text)=>setUsername(text)}

            />
            <TextInput

                label='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={(text)=>setPassword(text)}

            />

          
            <Button icon="login" mode="contained" color='orange' onPress={() => sendCred(props)}>
                Sign Up
            </Button>
            <Button icon="login" onPress={() => props.navigation.navigate('Login')}>
                Already have account?
            </Button>
       
      </View>
    );
  }



const styles = StyleSheet.create({
  
 
  inputext:{
      fontSize:20,
      flex:1,
      alignContent:"center",
      justifyContent:'center'

     
      
    

  }
});

export default SignupScreen;