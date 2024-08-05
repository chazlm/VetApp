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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const clientId = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";
const discovery = {
  authorizationEndpoint:
    "https://api.id.me/oauth/authorize?client_id=9c472741eb10921e06ff3be2418bfb52&redirect_uri=https://widevision.live/&response_type=code&scope=military",
};

const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

const LoginScreen = ({ navigation }) => {
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId,
      redirectUri,
      scopes: ["openid"],
      responseType: AuthSession.ResponseType.Code,
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;

      (async () => {
        try {
          const tokenResponse = await AuthSession.exchangeCodeAsync(
            {
              clientId,
              clientSecret,
              code,
              redirectUri,
              extraParams: {
                grant_type: "authorization_code",
              },
            },
            discovery
          );

          const { access_token, id_token } = tokenResponse;

          // Store tokens securely
          await SecureStore.setItemAsync("access_token", access_token);
          await SecureStore.setItemAsync("id_token", id_token);

          // Navigate to the main app
          navigation.navigate("Main");
        } catch (error) {
          console.error("Error fetching tokens:", error);
        }
      })();
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <Button
        disabled={!request}
        title="Login with ID.me"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};


function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <View style={styles.header}>
        </View>
        <Home />
        {/* <Tab.Screen name="Login" component={LoginScreen} /> */}
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
