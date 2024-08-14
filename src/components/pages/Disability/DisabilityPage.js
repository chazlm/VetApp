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
import BDD from "./BDD";
import DisabilityContent from "./DisabilityContent";
import { DisabilityFAQ } from "./DisabilityFAQ";
import { useTheme } from "../../../utils/theme";

export const DisabilityPage = () => {
  const [activeTab, setActiveTab] = useState("BDD");
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
        {/* <LeavingTheGunClub
          isCollapsed={activeTab !== "LeavingTheGunClub"}
          toggle={() => toggleTab("LeavingTheGunClub")}
          theme={theme}
        />

        <UnemploymentBenefitCalculator
          isCollapsed={activeTab !== "UnemploymentBenefitCalculator"}
          toggle={() => toggleTab("UnemploymentBenefitCalculator")}
          theme={theme}
        /> */}

        <BDD
          isCollapsed={activeTab !== "BDD"}
          toggle={() => toggleTab("BDD")}
          theme={theme}
        />

        <DisabilityContent
          isCollapsed={activeTab !== "Disability"}
          toggle={() => toggleTab("Disability")}
          theme={theme}
        />
        <DisabilityFAQ
          isCollapsed={activeTab !== "FAQ"}
          toggle={() => toggleTab("FAQ")}
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
