import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";

const LeavingTheGunClub = ({ isCollapsed, toggle }) => {
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={styles.tabTitle}>Leaving the Gun Club?</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.section}>
            First of all, thank you for your service. Not many of us veterans
            out there and especially those who transition successfully are even
            rarer. I hope to help ease that transition as a former servicemember
            myself.
          </Text>
          <Text style={styles.section}>
            This app will not help write your resume or help you find a job,
            what it will do however is give you a checklist of to-do's so that
            you can take advantage of the benefits OWED to you.
          </Text>
          <Text style={styles.section}>
            This page is what you should take care of immediately once you
            EAS/ETS. Feel free to open the tabs and read on.
          </Text>
        </View>
      </Collapsible>
    </>
  );
};

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    marginVertical: 5,
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    padding: 10,
    backgroundColor: "#e2e2e2",
  },
  section: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default LeavingTheGunClub;
