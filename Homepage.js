import  React, {useState,useEffect} from 'react';
import { StyleSheet,View, Text, Alert } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Header from './components/header';
import AsyncStorage from '@react-native-community/async-storage';




export default function Homepage(props) {


  
  const [username,setUsername] = useState('');
  const [description,setDescription] = useState('');
  const [duration,setDuration] = useState('');


 


  useEffect(()=>{
    async function tokenAuth(){
      const token = await AsyncStorage.getItem("token");
  
      fetch('http://192.168.1.144:3000/',{
        headers : new Headers({
          Authorization : "Bearer "+token
        })
  
      }).then(res=>res.json())
      .then(data=>{
        setUsername(data.email)
      })
  
    }

  tokenAuth();
    

  },[])


  const addMeds= async (props)=>{
    fetch("http://192.168.1.144:3000/meds/add",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "username":username,
       "description":description,
       "duration":duration
     })
    })
    .then(res=>res.json())
    .then(()=>{
           try {
             Alert.alert("Pill Saved","Your Pill is saved Sucefully")
           } catch (e) {
             console.log("error",e)
           }
    })
 }





  const logout =(props)=>{
  AsyncStorage.removeItem("token").then(()=>{
    props.navigation.navigate("Signup")
  })

  }



  
    return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.text}>
        Welcome {username} !!
      </Text>
      <TextInput
        label='Username'
        value={username}
        disabled='true'
        onChangeText={(text)=>setUsername(text)}

      />
      <TextInput
        label='Description'
        onChangeText={(text)=>setDescription(text)}

        />
        <TextInput
        label='Duration'
        onChangeText={(text)=>setDuration(text)}
        />

        <Button style={styles.addbutton} icon="plus" mode="contained" color='blue' onPress={()=>addMeds(props)}>Add</Button>


        <Button style={styles.addbutton} icon="table" mode="contained" color='green'>Your Medicines</Button>




      
      
      <Button style={styles.logoutbutton} icon="logout" mode="contained" color='red' onPress={()=>logout(props)}
      >Logout</Button>
  
    </View>
  
  );
}

const styles = StyleSheet.create({
  container :{
 
   
  flex:1,
  flexDirection:"column"

   
  
  },
  content:{
    padding: 40

  },
  list :{
    marginTop:20

  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    marginHorizontal:120,
    color:'green'
    
    
    
  },
  addbutton:{
    marginBottom:10,
    marginTop:10
  },
  logoutbutton:{
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 50

    
  }




});


