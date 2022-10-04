import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import IconSecond from 'react-native-vector-icons/MaterialIcons'

const App = () => {
  useEffect(() => {
    addUsers()
  }, [])


  const [text, setText] = useState('');
  const [users, setUsers] = useState([])
  const [items, setItems] = useState([
    { id: 1, text: 'Toyota Supra' },
    { id: 2, text: 'Ford Mustang' },
    { id: 3, text: 'Porshce Cayne' },
  ])

  let result

  const addUsers = async () => {
    const results = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await results.json()
    
    result = data
    setUsers(result)
  }
  const handlePress = () => {
    if (!text) {
      Alert.alert('Wahtung!', 'Enter a word, please!', ['ok'])
    } else {
      setItems(previousItems => (
        [{ id: (previousItems.length + 1).toString(), text }, ...previousItems]
      ))
    }
  }

  const handleDeleteItem = (id) => {
    setUsers(() => users.filter(element => element.id !== id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shopping list</Text>
      </View>
      <View style={styles.addItem}>
        <TextInput style={styles.text} value={text} onChangeText={word => setText(word)} placeholder='Enter...' />
        <Pressable onPress={handlePress}>
          <IconSecond name='add-shopping-cart' size={50} color={'purple'} />
        </Pressable>
      </View>
      <View>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View style={styles.listItemBlock}>
              <Text style={styles.listItem}>{item.name}</Text>
              <Pressable onPress={() => handleDeleteItem(item.id)} style={({ pressed }) => [{
                backgroundColor: pressed ? 'red' : '#8A0868'
              }, styles.deleteBtn]}>
                <Icon name='remove' size={18} color={'#FF0000'} />
              </Pressable>
            </ View>
          )}
        />
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  header: {
    backgroundColor: '#610B5E',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    padding: 10,
    fontSize: 20
  },
  addItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  text: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 6
  },
  listItem: {
    padding: 8,
    borderRadius: 10,
    color: 'white',
    fontSize: 18,
    margin: 8
  },
  listItemBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#8A0868',
    color: 'white',
    borderRadius: 100,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  deleteBtn: {
    padding: 8,
    margin: 10,
    borderRadius: '100%',
    color: '#FF0000',
    fontSize: 18,
  }
})