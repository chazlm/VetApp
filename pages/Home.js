import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import LeavingTheGunClub from "./tabs/WelcomeTab";
import UnemploymentBenefitCalculator from "./tabs/Unemployment";
import BDD from "./tabs/BDD";
import Disability from "./tabs/Disability";

const Home = () => {
  const [activeTab, setActiveTab] = useState("LeavingTheGunClub");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <LeavingTheGunClub
          isCollapsed={activeTab !== "LeavingTheGunClub"}
          toggle={() => toggleTab("LeavingTheGunClub")}
        />
        <UnemploymentBenefitCalculator
          isCollapsed={activeTab !== "UnemploymentBenefitCalculator"}
          toggle={() => toggleTab("UnemploymentBenefitCalculator")}
        />
        <BDD
          isCollapsed={activeTab !== "BDD"}
          toggle={() => toggleTab("BDD")}
        />
        <Disability
          isCollapsed={activeTab !== "Disability"}
          toggle={() => toggleTab("Disability")}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
