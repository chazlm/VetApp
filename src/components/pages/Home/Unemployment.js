import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Collapsible from "react-native-collapsible";
import UnemploymentCalculator from "./UnemploymentCalculator";

const UnemploymentBenefitCalculator = ({ isCollapsed, toggle, theme }) => {
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={theme.tabHeader}>Unemployment Benefit Calculator</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.section}>
            Do not feel too prideful to receive unemployment benefits.You've
            earned this right to collect unemployment as every citizen in
            America has the right to once they've worked for a certain period of
            time.
          </Text>
          <Text style={styles.section}>
            You will need to google your state's unemployment benefits to get
            started. The sooner you do this, the easier it will be for you.
            Here's a calculator that estimates what you would receive. Some
            states have minimum and maximum benefit amounts and lengths. This is
            state-specific.
          </Text>
          <Text style={styles.section}>
            Enter your state and monthly wage to calculate your estimated weekly
            unemployment benefit.
          </Text>
          <View style={styles.toolContainer}>
            <UnemploymentCalculator />
          </View>
        </View>
      </Collapsible>
    </>
  );
};

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  content: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  section: {
    fontSize: 16,
    marginBottom: 20,
  },
  toolContainer: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
  },
  picker: {
    width: "100%",
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  stateBox: {
    paddingTop: "2rem",
  },
});

export default UnemploymentBenefitCalculator;
