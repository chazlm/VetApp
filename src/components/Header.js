import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as AuthSession from "expo-auth-session";
import config from "../../config/config";
import ModalComponent from "./ModalComponent";

const Header = ({ title, onLoginPress }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginPress = () => {
    setShowModal(true);
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.logo}>
          vet<Text style={styles.logoApp}>era</Text>
        </Text>
        {config.showLoginButton && (
          <TouchableOpacity
            onPress={handleLoginPress}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>
              {isLoggedIn ? "Login" : "Join"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} />
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
