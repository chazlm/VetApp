import React from "react";
import * as AuthSession from "expo-auth-session";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const clientId = "9c472741eb10921e06ff3be2418bfb52";
  const clientSecret = "d3f696f1cfe9575441c30e8adddd3d88";
  const discovery = {
    authorizationEndpoint:
      "https://api.id.me/oauth/authorize?client_id=9c472741eb10921e06ff3be2418bfb52&redirect_uri=https://widevision.live/&response_type=code&scope=military",
    tokenEndpoint: "https://api.id.me/oauth/token",
  };

  const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

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

export default LoginScreen;
