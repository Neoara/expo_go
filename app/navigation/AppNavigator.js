import { createStackNavigator } from "@react-navigation/stack"
// import Casino from "../screens/Casino";
// import Login from "../screens/Login";
// import Messenger from '../screens/Messenger'
import MapViews from '../screens/MapViews'
import MapSearch from '../screens/MapSearch'

const Stack = createStackNavigator(); 

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name='Login' component={Login} options={{headerShown: true}} /> */}
        {/* <Stack.Screen name='Casino' component={Casino} options={{headerShown: false}}  /> */}
        {/* <Stack.Screen name='Messenger' component={Messenger} options={{headerShown: true}}  /> */}
        <Stack.Screen name='MapSearch' component={MapSearch} options={{headerShown: true}}  />
        <Stack.Screen name='MapViews' component={MapViews} options={{headerShown: true}}  />
    </Stack.Navigator>
  )
}

export default AppNavigator