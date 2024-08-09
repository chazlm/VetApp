import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { stateData } from '../../../src/utils/stateData';
import { useTheme } from '../../../src/utils/theme';

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

    return `Estimated Weekly Benefit for ${stateInfo.name} (Min: $${stateInfo.minBenefit
        }, Max: $${stateInfo.maxBenefit}): $${benefit.toFixed(2)}`;
};

const UnemploymentCalculator = () => {
    const theme = useTheme()

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
        <View style={styles.container}>
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
            <Text style={styles.label}>Enter your monthly earnings (before tax):</Text>
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
            <View style={[styles.stateBox, { backgroundColor: theme.colors.supalight }]}>

                {weeklyBenefit && <Text style={styles.result}>{weeklyBenefit}</Text>}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        marginBottom: 20,
        maxHeight: 80,
        minHeight: 80,
    },
    input: {
        maxHeight: 80,
        minHeight: 80,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    stateBox: {
        height: 120,
        marginTop: 20
    },

});

export default UnemploymentCalculator;
