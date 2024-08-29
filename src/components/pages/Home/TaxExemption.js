import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";

export const TaxExemption = ({ isCollapsed, toggle, theme }) => {
  const states = [
    "Arkansas",
    "Florida",
    "Hawaii",
    "Maryland",
    "Michigan",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Oklahoma",
    "Texas",
    "Virginia",
  ];
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={theme.tabHeader}>
          Property Tax Exemption{" "}
          <Text style={styles.tabSubheader}>(100% DAV)</Text>
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.section}>
            There are 11 states that will exempt your homestead property taxes.
            Some of these states might require Total and Permanent and others
            might require just 100%.
          </Text>
          {states.map((state) => (
            <Text key={state} style={styles.section}>
              {state}
            </Text>
          ))}
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
    backgroundcolor: "transparent",
    marginBottom: 5,
  },
  section: {
    fontSize: 16,
    marginBottom: 20,
  },
  tabSubheader: {
    fontSize: "14px",
    color: "grey",
  },
});
