import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import { Appbar } from 'react-native-paper';



const LoginScreen = () => {


  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Welcome To MedsMate" />
      </Appbar.Header>

      <TextInput

        label='Email'

      />
      <TextInput

        label='Password'
        secureTextEntry={true}

      />

      <Button icon="login" mode="contained">
        Login
</Button>
      <Button icon="login" mode="contained" color='orange' onPress={() => console.log('Pressed')}>
        SignUp
</Button>

    </View>
  );
}



const styles = StyleSheet.create({


  inputext: {
    fontSize: 20,
    flex: 1,
    alignContent: "center",
    justifyContent: 'center'





  }
});

export default LoginScreen;