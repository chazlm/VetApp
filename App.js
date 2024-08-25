import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Header from "./src/components/Header";
import { ThemeProvider } from "./src/utils/theme";
import { HomePage } from "./src/components/pages/Home/HomePage";
import { GIBPage } from "./src/components/pages/GIB/GiBillPage";
import { VALoanPage } from "./src/components/pages/Loan/VALoanPage";
import { DisabilityPage } from "./src/components/pages/Disability/DisabilityPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import the icon set

const Tab = createBottomTabNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider>
          <Header />
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Vetter") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "GI Bill") {
                  iconName = focused ? "school" : "school-outline";
                } else if (route.name === "VA Loan") {
                  iconName = focused ? "cash" : "cash-outline";
                } else if (route.name === "VA Disability") {
                  iconName = focused ? "medkit" : "medkit-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Vetter"
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
          </Tab.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
