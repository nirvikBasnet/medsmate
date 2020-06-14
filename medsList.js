import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';


export default function MedsList(props) {
    const [meds, setMeds] = useState([]);
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');

    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');

    async function showMeds() {


        fetch('http://192.168.1.144:3000/meds/', {



        }).then(res => res.json())
            .then(data => {
                setMeds(data)
                console.log(meds)


            })

    }

    function deleteMeds(id) {

        fetch('http://192.168.1.144:3000/meds/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data=>{
                Alert.alert("Your Pill Sucessfully deleted")
                showMeds()
                

            })
        }

               
          

    


    useEffect(() => {


        showMeds();


    }, [])




    return (
        <View style={styles.container} >
            <Text style={styles.header}>Your Medicine</Text>
            <Button onPress={() => showMeds()}>refresh</Button>
            <Button onPress={() => props.navigation.navigate("Home")}>Go Back</Button>
            <View style={styles.content}>
                <View>
                    <FlatList data={meds}

                        keyExtractor={(item, index) => item._id}



                        renderItem={({ item }) => {
                            return (
                                <View style={styles.listContainer}>
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