import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useTheme } from "../../../utils/theme";
import LeavingTheGunClub from "./WelcomeTab";
import UnemploymentBenefitCalculator from "./Unemployment";

export const HomePage = () => {
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
