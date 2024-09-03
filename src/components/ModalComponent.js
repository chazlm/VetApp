import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

const ModalComponent = ({ showModal, setShowModal }) => {
  // State object to manage all form fields
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

  const toggleModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://sandbox-api.va.gov/services/veteran-confirmation/v1/status",
        {
          firstName: "Wesley",
          middleName: "Watson",
          lastName: "Ford",
          birthDate: "1986-05-06",
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ScrollView
              style={styles.formContainer}
              contentContainerStyle={{ alignItems: "center" }}
            >
              <View style={styles.form}>
                <Text style={styles.modalTitle}>Register to join!</Text>

                {/* Disclaimer Text */}
                <Text style={styles.disclaimerText}>
                  * The information provided will be sent to the VA to verify
                  your veteran status.
                </Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.firstName}
                    onChangeText={(value) =>
                      handleInputChange("firstName", value)
                    }
                    placeholder="Enter first name"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.lastName}
                    onChangeText={(value) =>
                      handleInputChange("lastName", value)
                    }
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
                    onChangeText={(value) =>
                      handleInputChange("zipCode", value)
                    }
                    placeholder="Enter zip code"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Country</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.country}
                    onChangeText={(value) =>
                      handleInputChange("country", value)
                    }
                    placeholder="Enter country"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Birth Date</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.birthDate}
                    onChangeText={(value) =>
                      handleInputChange("birthDate", value)
                    }
                    placeholder="YYYY-MM-DD"
                  />
                </View>

                <TouchableOpacity
                  onPress={handleRegister}
                  style={styles.registerButton}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.closeButton}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
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
  closeButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  closeButtonContainer: {
    width: "90%",
  },
  formContainer: {
    width: "100%",
    display: "flex",
  },
  form: {
    width: "85%",
  },
  disclaimerText: {
    paddingBottom: 20,
    color: "gray",
  },
});

export default ModalComponent;
