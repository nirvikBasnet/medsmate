import  React, {useState} from 'react';
import { StyleSheet,View, Text, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header';
import MedsItems from './components/medsItem';
import AddMeds from './components/addMeds';




export default function App() {
  const [meds,setMeds] = useState([
    {text: 'Paracytamol', key:'1'},
    {text: 'Flexon', key:'2'},
    {text: 'Sytrane', key:'3'}

  ])

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


