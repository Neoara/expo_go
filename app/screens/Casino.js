import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';

const Casino = () => {
    const [num, setNum] = useState('');
    const [blockGreen, setBlockGreen] = useState(false);
    const [blockGreen1, setBlockGreen1] = useState(false);
    const [blockGreen2, setBlockGreen2] = useState(false);
    const [num1, setNum1] = useState(7);
    const [num2, setNum2] = useState(7);
    const [num3, setNum3] = useState(7);
    const [array, setArray] = useState([0, 0, 0]);
    const [balance, setBalance] = useState(2000);
    const [name, setName] = useState('')

    const getData = async () => {
        try {
            AsyncStorage.getItem('Users')
                .then(value => {
                    if (value !== null) {
                        setName(value)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    function handlePress() {
        if (balance !== 0) {
            setBalance((balance - 100))
            setNum1(Math.floor(Math.random() * 8))
            setNum2(Math.floor(Math.random() * 8))
            setNum3(Math.floor(Math.random() * 8))
        } else if (balance === 0) {
            Alert.alert('Пополните баланс')
        } else {
            setBalance(0)
        }

        setArray([num1, num2, num3])
    }

    let newWin = 0

    useEffect(() => {
        if (num == num1 && num == num2 && num == num3) {
            newWin = 3
            Alert.alert('You win Jackpot!!!!!!')
            setBalance(balance + 100000)
        } else if (num == num1 && num == num2 || num == num2 && num == num3 || num == num1 && num == num3) {
            newWin = 2
            Alert.alert('You win 200$!')
            setBalance(balance + 200)
        } else if (num == num1 || num == num2 || num == num3) {
            newWin = 1
            Alert.alert('You win 100$!')
            setBalance(balance + 100)
        }

        if (num == num1) {
            setBlockGreen(true)
        } else {
            setBlockGreen(false)
        }

        if (num == num2) {
            setBlockGreen1(true)
        } else {
            setBlockGreen1(false)
        }

        if (num == num3) {
            setBlockGreen2(true)
        } else {
            setBlockGreen2(false)
        }

    }, [array])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Welcome to Best Casino in KZ
                </Text>
            </View>
            <View style={styles.balanceBlock}>
                <TextInput style={styles.input} value={num} onChangeText={num => setNum(num)} placeholder='Write a number from 0 till 7' />
                <View style={styles.balanceBlockText}>
                    <Text style={styles.balanceBlockText}>
                        User: <Text style={styles.red}>{name}</Text>
                    </Text>
                    <Text style={styles.balanceBlockText}>
                        Balance: <Text style={styles.green}>{balance}$</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.numberBlock}>
                <View style={blockGreen ? styles.numberBlocksGreen : styles.numberBlocksRed}>
                    <Text style={styles.numberBlocksText}>
                        {num1}
                    </Text>
                </View>
                <View style={blockGreen1 ? styles.numberBlocksGreen : styles.numberBlocksRed}>
                    <Text style={styles.numberBlocksText}>
                        {num2}
                    </Text>
                </View>
                <View style={blockGreen2 ? styles.numberBlocksGreen : styles.numberBlocksRed}>
                    <Text style={styles.numberBlocksText}>
                        {num3}
                    </Text>
                </View>
            </View>
            <View style={styles.btnBlock}>
                <Pressable onPress={handlePress}>
                    <Text style={styles.btn}>
                        Play
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Casino

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },
    input: {
        borderWidth: 2,
        height: 45,
        fontSize: 16,
        marginRight: 12,
        width: 220
    },
    header: {
        backgroundColor: 'darkblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    balanceBlock: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    balanceBlockText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkblue',
        marginRight: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    },
    numberBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
    },
    numberBlocksGreen: {
        width: 80,
        height: 80,
        backgroundColor: 'darkgreen',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberBlocksRed: {
        width: 80,
        height: 80,
        backgroundColor: 'darkred',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberBlocksText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    btn: {
        width: 100,
        height: 35,
        fontSize: 26,
        backgroundColor: 'darkblue',
        color: 'white',
        textAlign: 'center'
    },
    btnBlock: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    }
})