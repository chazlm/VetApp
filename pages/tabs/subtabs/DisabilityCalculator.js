import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

const DisabilityCalculator = () => {
    const [percentage, setPercentage] = useState('');
    const [result, setResult] = useState(null);

    const calculateDisability = () => {
        let baseRate = 0;

        switch (parseInt(percentage)) {
            case 10: baseRate = 171.23; break;
            case 20: baseRate = 338.49; break;
            case 30: baseRate = 524.31; break;
            case 40: baseRate = 755.28; break;
            case 50: baseRate = 1075.16; break;
            case 60: baseRate = 1361.88; break;
            case 70: baseRate = 1716.28; break;
            case 80: baseRate = 1995.01; break;
            case 90: baseRate = 2241.91; break;
            case 100: baseRate = 3737.85; break;
            default: baseRate = 0; break;
        }

        setResult(baseRate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Disability Percentage</Text>
            <Picker
                selectedValue={percentage}
                style={styles.picker}
                onValueChange={(itemValue) => setPercentage(itemValue)}
            >
                {[...Array(11)].map((_, i) => (
                    <Picker.Item key={i} label={`${i * 10}%`} value={`${i * 10}`} />
                ))}
            </Picker>
            <Button title="Calculate" onPress={calculateDisability} />
            {result !== null && (
                <Text style={styles.result}>Estimated Monthly Payment: ${result.toFixed(2)}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
    result: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    picker: {
        marginBottom: 20
    }
});

export default DisabilityCalculator;
