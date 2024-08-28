import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import countyData from "../../../utils/countyLimits.json"; // JSON data imported here
import { useTheme } from "../../../utils/theme";
import { TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";

const VALoanCalculator = ({ toggle, isCollapsed, theme }) => {
  const [county, setCounty] = useState("");
  const [state, setState] = useState("");
  const [loanLimits, setLoanLimits] = useState(null);

  const handleCalculate = () => {
    const limits = countyData.find(
      (obj) => obj.county === county && obj.state === state
    );
    if (!limits) {
      setLoanLimits("Invalid county");
      return;
    }
    setLoanLimits(limits);
  };

  const uniqueStates = [...new Set(countyData.map((item) => item.state))];
  console.log({ countyData });
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={theme.tabHeader}>VA Loan Calculator</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.container}>
          <Text style={styles.resultText}>
            &#8226;IF YOU HAVE AN OUTSTANDING VA LOAN YOU NEED TO SUBTRACT YOUR
            MORTGAGE NUMBER AGAINST THESE LIMITS.
          </Text>
          <Text style={styles.resultText}>
            &#8226;THERE IS NO LIMIT IF IT'S YOUR FIRST TIME USING A VA LOAN. AS
            LONG AS YOU QUALIFY.
          </Text>
          <Text style={styles.text}>
            Select your county to view VA loan limits
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={state}
              style={styles.picker}
              onValueChange={(itemValue) => setState(itemValue)}
            >
              <Picker.Item label="Select State" value="" />
              {uniqueStates.map((state) => (
                <Picker.Item key={state} label={state} value={state} />
              ))}
            </Picker>
            <Picker
              selectedValue={county}
              style={styles.picker}
              onValueChange={(itemValue) => setCounty(itemValue)}
            >
              <Picker.Item label="Select County" value="" />
              {countyData
                .filter((obj) => obj.state === state)
                .map((obj) => (
                  <Picker.Item
                    key={obj.county + obj.state}
                    label={obj.county}
                    value={obj.county}
                  />
                ))}
            </Picker>
          </View>
          <Button
            disabled={!(state.length > 0 && county.length > 0)}
            title="Calculate"
            onPress={handleCalculate}
          />

          {loanLimits && (
            <View
              style={[
                styles.stateBox,
                { backgroundColor: theme.colors.supalight },
              ]}
            >
              <View>
                <Text style={styles.result}>
                  SFH Limit: ${loanLimits.single}
                </Text>
                <Text style={styles.result}>
                  Duplex Limit: ${loanLimits.duplex}
                </Text>
                <Text style={styles.result}>
                  Triplex Limit: ${loanLimits.triplex}
                </Text>
                <Text style={styles.result}>
                  Fourplex Limit: ${loanLimits.fourplex}
                </Text>
              </View>
            </View>
          )}
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
  container: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  text: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  pickerContainer: {
    marginTop: 20,
  },
  picker: {
    width: "100%",
  },
  result: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  resultText: {
    margin: 15,
    fontSize: 15,
    fontWeight: "bold",
  },
  stateBox: {
    marginTop: 20,
  },
});

export default VALoanCalculator;
