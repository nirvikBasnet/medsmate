import  React, {useState} from 'react';
import { StyleSheet,View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function header(){
   return (
       <View style={styles.header}>
           <Text style={styles.title}>
               MedsMate
           </Text>
       </View>
   )
}
const styles = StyleSheet.create({
    header :{
        height:80,
        paddingTop:38,
        backgroundColor:'green'
    },
    title:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold'
    }


});