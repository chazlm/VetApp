import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LeavingTheGunClub from "./tabs/WelcomeTab";
import UnemploymentBenefitCalculator from "./tabs/Unemployment";
import BDD from "./tabs/BDD";
import Disability from "./tabs/Disability";
import { useTheme } from "../src/utils/theme";

const Home = () => {
  const [activeTab, setActiveTab] = useState("LeavingTheGunClub");
  const theme = useTheme();

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.light }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          vet<Text style={styles.logoApp}>app</Text>
        </Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <LeavingTheGunClub
          isCollapsed={activeTab !== "LeavingTheGunClub"}
          toggle={() => toggleTab("LeavingTheGunClub")}
          theme={theme}
        />

        <UnemploymentBenefitCalculator
          isCollapsed={activeTab !== "UnemploymentBenefitCalculator"}
          toggle={() => toggleTab("UnemploymentBenefitCalculator")}
          theme={theme}
        />

        <BDD
          isCollapsed={activeTab !== "BDD"}
          toggle={() => toggleTab("BDD")}
          theme={theme}
        />

        <Disability
          isCollapsed={activeTab !== "Disability"}
          toggle={() => toggleTab("Disability")}
          theme={theme}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  content: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  tab: {
    marginVertical: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tabContent: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});

export default Home;