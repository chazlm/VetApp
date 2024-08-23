import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { salaries, stateData } from "../../../utils/data";
import { useTheme } from "../../../utils/theme";

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

const UnemploymentCalculator = () => {
  const theme = useTheme();

  const [state, setState] = useState("FL");
  const [monthlyEarnings, setMonthlyEarnings] = useState(2000);
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
    <View style={styles.container}>
      <Text style={styles.text}>
        Pick your state and monthly salary (before taxes)
      </Text>
      <View style={styles.pickerContainer}>
        <View style={styles.picker}>
          {/* <Text style={styles.label}>Select your state:</Text> */}
          <Picker
            selectedValue={state}
            // style={styles.picker}
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
        </View>
        <View style={styles.picker}>
          {/* <Text style={styles.label}>
            Enter your monthly earnings (before tax):
          </Text> */}
          <Picker
            selectedValue={monthlyEarnings}
            style={styles.picker}
            onValueChange={setMonthlyEarnings}
          >
            {salaries.map((salary) => (
              <Picker.Item key={salary} label={salary} value={salary} />
            ))}
          </Picker>
        </View>
      </View>
      <Button title="Calculate" onPress={handleCalculate} />
      <View
        style={[styles.stateBox, { backgroundColor: theme.colors.supalight }]}
      >
        {weeklyBenefit && <Text style={styles.result}>{weeklyBenefit}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    textAlign: "center",
  },
  picker: {
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  stateBox: {
    height: 120,
    marginTop: 20,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default UnemploymentCalculator;
