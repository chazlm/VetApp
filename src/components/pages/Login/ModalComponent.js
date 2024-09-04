import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import RegistrationForm from "./RegistrationForm";

const ModalComponent = ({ showModal, setShowModal }) => {
  const [loading, setLoading] = useState(false);

  const toggleModal = () => {
    setShowModal(false);
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="none"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <ScrollView
              style={styles.formContainer}
              contentContainerStyle={{
                display: "flex",
              }}
            >
              <RegistrationForm
                showModal={showModal}
                setShowModal={setShowModal}
                toggleModal={toggleModal}
              />
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
    width: 40,
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
    marginLeft: 30,
    marginTop: 10,
  },
  disclaimerText: {
    paddingBottom: 20,
    color: "gray",
  },
});

export default ModalComponent;
