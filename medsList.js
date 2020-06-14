import  React, {useState,useEffect, Component} from 'react';
import { StyleSheet,View, Text, Alert, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default function MedsList(props){
    const [meds,setMeds] = useState([]);
    const [id,setId] = useState('');
    const [username,setUsername] = useState('');
    const [description,setDescription] = useState('');
    const [duration,setDuration] = useState('');

    async function showMeds(){
          
      
        fetch('http://192.168.1.144:3000/meds/',{
         
    
        }).then(res=>res.json())
        .then(data=>{
            setMeds(data)
            console.log(meds)
            
          
        })
    
      }


    useEffect(()=>{
       
    
      showMeds();
        
    
      },[])

    


    return(
        <View style={styles.container} >
            <Text style={styles.header}>Your Medicine</Text>
            <Button onPress={()=>showMeds()}>refresh</Button>
            <Button onPress={()=>props.navigation.navigate("Home")}>Go Back</Button>
            <View style={styles.content}>
                <View>
                    <FlatList data={meds}
                    renderItem={({ item })=>(
                        <Text style={styles.listText}>{item.description}</Text>
                      
                    )}
                    
                    
                    
                    >
            
                    </FlatList>
                    
                    </View>

            </View>

       
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        paddingTop:38


    },
    header:{
        fontSize:20,
        textAlign:"center",
        color: "green"

    },
    content:{
        padding:40,

    },
    listText:{
        padding:16,
        margin:16,
        borderColor:"grey",
        borderWidth:1,
        borderRadius:10

    }
  
  
  
  
  });