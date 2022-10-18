import { createStackNavigator } from "@react-navigation/stack"
import Casino from "../screens/Casino";
import Login from "../screens/Login";

const Stack = createStackNavigator(); 

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: true}} />
        <Stack.Screen name='Casino' component={Casino} options={{headerShown: false}}  />
    </Stack.Navigator>
  )
}

export default AppNavigator