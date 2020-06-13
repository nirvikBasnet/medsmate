import  React, {useState} from 'react';
import { StyleSheet,View, Text, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import {Button} from 'react-native-paper';
import Header from './components/header';
import MedsItems from './components/medsItem';
import AddMeds from './components/addMeds';
import AsyncStorage from '@react-native-community/async-storage';




export default function Homepage(props) {
  const [meds,setMeds] = useState();


  const logout =(props)=>{
  AsyncStorage.removeItem("token").then(()=>{
    props.navigation.navigate("Signup")
  })

  }

  const submitHandler = (text) => {
    

    if(text.length > 3){
    setMeds((prevMeds)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevMeds
      ];

    });
  }
  else{
    Alert.alert('OPPS!','Meds Must Be More Then 3 Char', [
      {text:'Understood'}
    ]);

  }
  }

  const pressHandler = (key) => {
    setMeds((prevMeds)=>{
      return prevMeds.filter(med=>med.key !=key);
    })
  }


  
    return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddMeds submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={meds}
          renderItem={({ item })=>(
            <MedsItems 
            item ={ item }
            pressHandler={pressHandler}
            
            />

          )}

          />
          <Button icon="login" mode="contained" color='orange' onPress={() => logout(props)}>
           Logout
          </Button>
          
        </View>
      </View>
  
    </View>
  
  );
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
  

   
  
  },
  content:{
    padding: 40

  },
  list :{
    marginTop:20

  }




});


