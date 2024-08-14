import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Collapsible from "react-native-collapsible";

export const VALoanContent = ({ isCollapsed, toggle }) => {
  return (
    <SafeAreaProvider>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={styles.tabTitle}>VA Loan</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.section}>
            The VA Loan is a home loan program offered by the Department of
            Veterans Affairs. It provides eligible veterans, active-duty service
            members, and certain members of the National Guard and Reserves with
            a valuable benefit that can be used to purchase, build, or improve a
            home.
          </Text>
          <Text style={styles.section}>Key Points:</Text>
          <Text style={styles.bulletPoint}>
            • The VA Loan program offers competitive interest rates, often lower
            than those available to the general public, and typically does not
            require a down payment or private mortgage insurance (PMI).
          </Text>
          <Text style={styles.bulletPoint}>
            • To be eligible, you must have served 90 consecutive days of active
            service during wartime, 181 days of active service during peacetime,
            or six years in the National Guard or Reserves. Spouses of service
            members who died in the line of duty or due to a service-related
            disability may also be eligible.
          </Text>
          <Text style={styles.bulletPoint}>
            • The VA Loan is guaranteed by the VA, meaning that if the borrower
            defaults, the VA will cover a portion of the loan, making it less
            risky for lenders to offer favorable terms.
          </Text>
          {/* Add any additional components like calculators or further resources here */}
        </View>
      </Collapsible>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  content: {
    padding: 20,
    backgroundColor: "#ffffff",
    marginBottom: 5,
  },
  section: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    fontFamily: "Montserrat",
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
    fontFamily: "Montserrat",
  },
});

export default VALoanContent;
