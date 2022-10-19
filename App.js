import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import { StatusBar} from "react-native";
import React from "react";

const App = () => {

  return (
   <NavigationContainer>
     <StatusBar />
     <AppNavigator /> 
   </NavigationContainer>
  )
}

export default App;
