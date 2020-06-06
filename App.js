import  React, {useState} from 'react';
import { StyleSheet,View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header';




export default function App() {
  const [todos,setTodo] = useState([
    {text: 'Paracytamol', key:'1'},
    {text: 'Flexon', key:'2'},
    {text: 'Sytrane', key:'3'}

  ])


  
    return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({ item })=>(
            <Text>{ item.text }</Text>
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
    backgroundColor: 'orange',

   
  
  },
  content:{
    padding: 40

  },
  list :{
    marginTop:20

  }




});


