import React from 'react'
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const MapSearch = ({ navigation }) => {
  const [nameCity, setNameCity] = useState('')

  const url = `https://api.api-ninjas.com/v1/city?name=${nameCity}`;

  const login = async () => {
    fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "X-Api-Key": "e+qlchWuFYBeD4YgGZeK0g==NJHQD8jNDdkrgRf6"
      }
    })
      .then(resp => resp.json())
      .then(function (data) {
        navigation.navigate('MapViews', {
          latitude: data[0].latitude,
          longitude: data[0].longitude
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={nameCity} onChangeText={name => setNameCity(name)} placeholder='Write a login' />
      <Button title='Search' onPress={login} />
    </View>
  )
}

export default MapSearch

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