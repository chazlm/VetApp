import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";

const RegistrationForm = ({ showModal, setShowModal, toggleModal }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    birthDate: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://sandbox-api.va.gov/services/veteran-confirmation/v1/status",
        {
          firstName: "Wesleysdf",
          middleName: "Watsonsdfs",
          lastName: "Ford",
          //   birthDate: "1986-05-06",
          gender: "M",
          streetAddressLine1: "1723 GOSNELL RD",
          city: "VIENNA",
          zipCode: "22182",
          state: "VA",
          country: "USA",
        },
        {
          headers: {
            apikey: process.env.EXPO_PUBLIC_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false); // Hide loading indicator
      console.log(response);
    } catch (error) {
      setLoading(false); // Hide loading indicator
      console.error("Error fetching data:", error);
    }
  };
  return (
    <ScrollView
      style={styles.formContainer}
      contentContainerStyle={{
        display: "flex",
      }}
    >
      <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
        <AntDesign name="closesquareo" size={18} />
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#2196F3" />
      ) : (
        <View style={styles.form}>
          <Text style={styles.modalTitle}>Register to join!</Text>
          <Text style={styles.disclaimerText}>
            * The information provided will be sent to the VA to verify your
            veteran status.
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              value={formData.firstName}
              onChangeText={(value) => handleInputChange("firstName", value)}
              placeholder="Enter first name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={formData.lastName}
              onChangeText={(value) => handleInputChange("lastName", value)}
              placeholder="Enter last name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Street Address</Text>
            <TextInput
              style={styles.input}
              value={formData.streetAddress}
              onChangeText={(value) =>
                handleInputChange("streetAddress", value)
              }
              placeholder="Enter street address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              value={formData.city}
              onChangeText={(value) => handleInputChange("city", value)}
              placeholder="Enter city"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={styles.input}
              value={formData.state}
              onChangeText={(value) => handleInputChange("state", value)}
              placeholder="Enter state"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={styles.input}
              value={formData.zipCode}
              onChangeText={(value) => handleInputChange("zipCode", value)}
              placeholder="Enter zip code"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country</Text>
            <TextInput
              style={styles.input}
              value={formData.country}
              onChangeText={(value) => handleInputChange("country", value)}
              placeholder="Enter country"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Birth Date</Text>
            <TextInput
              style={styles.input}
              value={formData.birthDate}
              onChangeText={(value) => handleInputChange("birthDate", value)}
              placeholder="YYYY-MM-DD"
            />
          </View>
          <TouchableOpacity
            onPress={handleRegister}
            style={styles.registerButton}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Disclaimer Text */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "85%",
    marginLeft: 30,
    marginTop: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  disclaimerText: {
    paddingBottom: 20,
    color: "gray",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegistrationForm;
