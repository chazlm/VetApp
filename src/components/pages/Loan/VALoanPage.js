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
import { useTheme } from "../../../utils/theme";
import VALoanContent from "./VALoanContent";
import { VALoanFAQ } from "./VALoanFAQ";
import VALoanCalculator from "./VALoanCalculator";

export const VALoanPage = () => {
  const [activeTab, setActiveTab] = useState("content");
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
        <VALoanContent
          isCollapsed={activeTab !== "content"}
          toggle={() => toggleTab("content")}
          theme={theme}
        />
        <VALoanFAQ
          isCollapsed={activeTab !== "faq"}
          toggle={() => toggleTab("faq")}
          theme={theme}
        />
        <VALoanCalculator
          isCollapsed={activeTab !== "calculator"}
          toggle={() => toggleTab("calculator")}
          theme={theme}
        />
        {/* <Disability
          isCollapsed={activeTab !== "Disability"}
          toggle={() => toggleTab("Disability")}
          theme={theme}
        /> */}
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
    color: "gray",
  },
});
