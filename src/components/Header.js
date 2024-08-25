// components/Header.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as AuthSession from "expo-auth-session";
import config from "../../config/config";

const clientId = "1f632d93334fedf2811804c884831638";
const clientSecret = "1fcbb3cb4bc81ace8f99c36b881412fe";
const redirectUri = "https://greenweenie.netlify.app/";

const discovery = {
  authorizationEndpoint:
    "https://api.id.me/oauth/authorize?client_id=1f632d93334fedf2811804c884831638&redirect_uri=https://greenweenie.netlify.app/&response_type=code&scope=military",
  tokenEndpoint: "https://api.id.me/oauth/token",
};

const Header = ({ title, onLoginPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        vet<Text style={styles.logoApp}>ter</Text>
      </Text>
      {config.showLoginButton && (
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#f8f8f8",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d9cdb",
  },
  logoApp: {
    fontWeight: "normal",
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Header;
