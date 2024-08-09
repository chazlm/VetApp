// App.js
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";
import * as AuthSession from "expo-auth-session";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Home from "./pages/Home";
import Settings from "./pages/Settings";
import GIBill from "./pages/GIBill";
import VALoan from "./pages/VALoan";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./src/components/Header";
import { ThemeProvider } from "./src/utils/theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="VetApp" component={Home} options={{
              header: () =>
                <></>
            }} />
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#4b5320",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    alignItems: "flex-start",
    paddingLeft: "1rem",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
