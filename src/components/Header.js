// components/Header.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as AuthSession from "expo-auth-session";
import config from "../../config/config";
import axios from "axios";

const Header = ({ title, onLoginPress }) => {
  const handleVerify = async () => {
    try {
      const response = await axios.post(
        "https://sandbox-api.va.gov/services/veteran-confirmation/v1/status",
        {
          firstName: "Wesley",
          middleName: "Watson",
          lastName: "Ford",
          birthDate: "1986-05-06",
          gender: "M",
          streetAddressLine1: "1723 GOSNELL RD",
          city: "VIENNA",
          zipCode: "22182",
          state: "VA",
          country: "USA",
        },
        {
          headers: {
            apikey: "rjJDXiyVsmB0qYPjB1Su9hSYGQJAwooy", // Ensure this is correct
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        vet<Text style={styles.logoApp}>era</Text>
      </Text>
      {config.showLoginButton && (
        <TouchableOpacity onPress={handleVerify} style={styles.loginButton}>
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
    color: "rgb(46 219 45)",
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
