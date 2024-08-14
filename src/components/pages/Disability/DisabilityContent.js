import React, { useState } from "react";
import { View, Text, StyleSheet, Linking, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Collapsible from "react-native-collapsible";
import DisabilityCalculator from "./DisabilityCalculator";

// import { } from ''

const DisabilityContent = ({ isCollapsed, toggle, theme }) => {
  const screenWidth = Dimensions.get("window").width;
  const imageWidth = screenWidth * 0.9; // Adjust the percentage as needed

  return (
    <SafeAreaProvider>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={styles.tabTitle}>VA Disability</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.section}>
            VA Disability is one of the best perks of doing your time in the
            military. I say this and the following sentences not to brag about
            it but to make you realize why you need to be dilligent about this
            NOW. You could be giving up something that's well worth it.
          </Text>
          <Text style={styles.section}>Few points:</Text>
          <Text style={styles.bulletPoint}>
            • Retirement plans that match inflation is unheard of. While
            disability pay is not a retirement plan as it's compensation for
            your injuries and wear and tear on your body, it and social security
            is the only programs I know that keep up with COLA.
          </Text>
          <View style={styles.chartContainer}>
            <Image
              source={require("../../../../assets/va-disability-bar-chart.png")}
              style={[styles.image, { width: imageWidth, height: imageWidth }]}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.bulletPoint}>
            • There are a lot of that come with VA Disability - not just
            financially. You will get access to VR&E, Space-A Flights, CHAMPVA,
            DEA, and more. There's an exhaustive list that goes over benefits by
            disability percentages .
          </Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.reddit.com/r/VeteransBenefits/wiki/combinedbenefits/"
              )
            }
          >
            Comprehensive Guide on Reddit
          </Text>

          <DisabilityCalculator />
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
  },
  content: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  section: {
    fontSize: 16,
    marginBottom: 50,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10,
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
  chartContainer: {
    display: "flex",
    alignItems: "center",
    padding: "2rem",
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 50,
    marginLeft: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  answer: {
    fontSize: 16,
    marginTop: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default DisabilityContent;
