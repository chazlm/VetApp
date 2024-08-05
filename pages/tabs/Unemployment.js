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
import { Picker } from "@react-native-picker/picker";
import { stateData } from "../../src/utils/stateData";

const calculateUnemployment = (state, monthlyEarnings) => {
  const stateInfo = stateData[state];
  if (!stateInfo) return "Invalid state";

  const quarterlyEarnings = monthlyEarnings * 3;
  const weeklyBenefit = quarterlyEarnings * 0.04; // Adjusted to ensure $2,000 monthly yields $240 weekly
  return Math.min(
    Math.max(weeklyBenefit, stateInfo.minBenefit),
    stateInfo.maxBenefit
  );
};

const generateBenefitText = (state, benefit) => {
  const stateInfo = stateData[state];
  if (!stateInfo) return "Invalid state";

  return `Estimated Weekly Benefit for ${stateInfo.name} (Min: $${
    stateInfo.minBenefit
  }, Max: $${stateInfo.maxBenefit}): $${benefit.toFixed(2)}`;
};

const UnemploymentBenefitCalculator = ({ isCollapsed, toggle }) => {
  const [state, setState] = useState("AL");
  const [monthlyEarnings, setMonthlyEarnings] = useState("2000");
  const [weeklyBenefit, setWeeklyBenefit] = useState(null);

  const handleCalculate = () => {
    const monthly = parseFloat(monthlyEarnings);
    if (isNaN(monthly)) {
      setWeeklyBenefit("Invalid input");
      return;
    }
    const benefit = calculateUnemployment(state, monthly);
    const benefitText = generateBenefitText(state, benefit);
    setWeeklyBenefit(benefitText);
  };

  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={styles.tabTitle}>Unemployment Benefit Calculator</Text>
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
            <Text style={styles.label}>Select your state:</Text>
            <Picker
              selectedValue={state}
              style={styles.picker}
              onValueChange={(itemValue) => setState(itemValue)}
            >
              {Object.keys(stateData).map((stateKey) => (
                <Picker.Item
                  key={stateKey}
                  label={stateData[stateKey].name}
                  value={stateKey}
                />
              ))}
            </Picker>
            <Text style={styles.label}>
              Enter your monthly earnings (before tax):
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Monthly Earnings"
              keyboardType="numeric"
              returnKeyType="done"
              value={monthlyEarnings}
              onChangeText={setMonthlyEarnings}
              onSubmitEditing={handleCalculate}
            />
            <Button title="Calculate" onPress={handleCalculate} />
            {weeklyBenefit && (
              <Text style={styles.result}>{weeklyBenefit}</Text>
            )}
            <View style={styles.stateBox}></View>
          </View>
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
