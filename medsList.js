import React, { useState, useEffect, SearchBar} from 'react';
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { Button, Searchbar, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';


export default function MedsList(props) {
    const [meds, setMeds] = useState();
    const [username, setUsername] = useState('');



    


    useEffect(() => {
        async function tokenAuth() {
            const token = await AsyncStorage.getItem("token");

            try {
                const result = await fetch('http://192.168.1.144:3000/', {
                    headers: new Headers({
                        Authorization: "Bearer " + token
                    })
    
                });
                const json = await result.json();
                

                setUsername(json.email)
                
            }
            catch (error) {
                
            };

            

        }

        tokenAuth();

       
        


    }, [])

    useEffect(() => {
        

        showMeds().then((meds)=>{
            
            const newMeds = meds.filter(med => { return med.username === username });
           console.log(newMeds)
            getMedByUser(newMeds)
             
    
        });
    
    
    }, [username])


    async function showMeds() {

        try {
            const result = await fetch('http://192.168.1.144:3000/meds/');
            const json = await result.json();
        // alert(JSON.stringify(json))
            return json;
        }
        catch (error) {
        };


      
    }

    function deleteMeds(id) {

        fetch('http://192.168.1.144:3000/meds/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert("Your Pill Sucessfully deleted")
                showMeds()


            }).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                
                  throw error;
                });
    }







    

  function getMedByUser(meds){

        setMeds(meds)
        console.log(meds)
   
   

  }


   
   

  
    return (
        <View style={styles.container} >
        
            <Text style={styles.header}>Your Medicine</Text>
            <TextInput 
            disabled="true">Medicines For {username}</TextInput>
            
            <Button onPress={() => props.navigation.navigate("Home")}>Go Back</Button>
         
            <View style={styles.content}>
                <View>
                   
                    <FlatList data={meds}
                    


                        keyExtractor={(item) => item._id}



                        renderItem={({ item }) => {
                            return (


                                <View style={styles.listContainer}>
                                    
                                   

                                    <Text >Added By : {item.username}</Text>
                                    <Text style={styles.mednameText}>{item.medsname}</Text>


                                    <Text style={styles.durationText}>Duration :{item.duration} hours</Text>
                                    <Text style={styles.descriptionText}>Description:</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                    <Button icon="delete" color="red" onPress={() => deleteMeds(item._id)}>Delete</Button>
                                </View>
                            )



                        }}




                    >

                    </FlatList>

                </View>

            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 38


    },
    header: {
        fontSize: 20,
        textAlign: "center",
        color: "green"

    },
    listContainer: {
        height: 150,
        padding: 10,
        margin: 16,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        position: "relative"


    },
    mednameText: {
        fontSize: 20,
        color: "red"

    },
    durationText: {
        fontSize: 20,
        color: "grey"
    },
    descriptionText: {
        fontSize: 20,
        color: "green"
    },
    description: {
        fontSize: 16,

    }




});