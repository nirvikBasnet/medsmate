import  React, {useState} from 'react';
import { StyleSheet,View, Text, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import Header from './components/header';
import MedsItems from './components/medsItem';
import AddMeds from './components/addMeds';




export default function Homepage() {
  const [meds,setMeds] = useState();

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


