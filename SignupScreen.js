import React,{useState} from 'react';
import { Text,Alert,View, StyleSheet } from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import { Appbar} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';


const SignupScreen =(props)=>{

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  


  const sendCred= async (props)=>{
    fetch("http://192.168.1.144:3000/signup",{
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
             props.navigation.replace("home")
           } catch (e) {
             console.log("error hai",e)
           }
    })
 }


 
    return (
      <View>
       <Appbar.Header>
       <Appbar.Content title="Welcome To MedsMate" />
    </Appbar.Header>

    <TextInput

                label='Email'
                value ={email}
                onChangeText={(text)=>setEmail(text)}

            />
            <TextInput

                label='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={(text)=>setPassword(text)}

            />

          
            <Button icon="login" mode="contained" color='orange' onPress={() => sendCred()}>
                Sign Up
            </Button>
            <Button icon="login" mode="contained" onPress={() => props.navigation.navigate('Login')}>
                Login Instead
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