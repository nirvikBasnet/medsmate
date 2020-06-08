import  React, {useState} from 'react';
import { StyleSheet,View, Text,TextInput, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';

export default function addMeds({submitHandler}){

const [text,setText]=useState('');

const changeHandler =(val)=>{
    setText(val);

}
    return (
        <View>
            <TextInput style={styles.input}
            placeholder = 'New Meds ...'
            onChangeText = {changeHandler}
            
            />
            <Button title='Add Med' color='coral' onPress={()=>submitHandler(text)}/>
                
        </View>   

    )
}

const styles = StyleSheet.create({
    input :{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'

    }
});