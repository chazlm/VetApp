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

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./src/components/Header";
import { ThemeProvider } from "./src/utils/theme";
import { HomePage } from "./src/components/pages/Home/HomePage";
import { GIBPage } from "./src/components/pages/GIB/GiBillPage";
import { VALoanPage } from "./src/components/pages/Loan/VALoanPage";
import { DisabilityPage } from "./src/components/pages/Disability/DisabilityPage";

const Tab = createBottomTabNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    OpenSans: require("./assets/fonts/OpenSans.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    // Add more fonts here as needed
  });
};

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider>
          <Header />
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
              name="VetApp"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="GI Bill"
              component={GIBPage}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="VA Loan"
              component={VALoanPage}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="VA Disability"
              component={DisabilityPage}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          </Tab.Navigator>
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
