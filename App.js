import React from "react"
import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { BookDetail } from "./screens"
import Tabs from "./navigation/tabs"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}
const  Stack = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        {/* tabs */}
        <Stack.Screen name="Tabs" component={Tabs} />
        {/* screens */}
        <Stack.Screen name="BookDetail" component={BookDetail}  />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;