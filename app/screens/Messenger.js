import * as React from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import * as Speech from 'expo-speech';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Messenger() {

    const [word, setWord] = useState('')

    const speak = () => {
        let newWord = word.toLowerCase()

        if(newWord == "hello" || newWord == 'hi'){
            const thingToSayHello = `Hello, What's ur name?`;
            Speech.speak(thingToSayHello, {language: 'en-US'});
        }else if(newWord == `my name is batyr`){
            let res = newWord.split(' ');
            let res1 = res.pop()

            Speech.speak(`Nice to meet you, ${res1}` , {language: 'en-US'});
        }else if(newWord == 'how are you?'){
            Speech.speak(`I am fine, thank you!` , {language: 'en-US'});
        }else{ 
            Speech.speak(`I don’t know how to answer this question, sorry! ` , {language: 'en-US'});
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={word} onChangeText={word => setWord(word)} placeholder='Hello...' />
            <Button title="Send" onPress={speak} />
        </View>
    );
}

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
        marginRight: 12,
        width: 220
    },
})