import React from 'react'
import { View, Button, StyleSheet, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [loginName, setLoginName] = useState('')

  const login = async () => {
    if (loginName === '') {
      Alert.alert('Attention!', 'Enter your name, please!')
    } else {
      try {
        await AsyncStorage.setItem('Users', loginName)
        navigation.navigate('Messenger')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={loginName} onChangeText={loginName => setLoginName(loginName)} placeholder='Write a login' />
      <Button title='Login' onPress={login} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 2,
    height: 45,
    fontSize: 16,
    marginBottom: 5,
    width: 220
  },
})