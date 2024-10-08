import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { SafeAreaView } from "react-native-safe-area-context";

export const VALoanFAQ = ({ isCollapsed, toggle, theme }) => {
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={theme.tabHeader}>VA Loan FAQ</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.section}>FAQs:</Text>
          <Text style={styles.faqQuestion}>Who is eligible for a VA Loan?</Text>
          <Text style={styles.faqAnswer}>
            Eligibility is generally based on your service history. Veterans,
            active-duty service members, and certain National Guard and Reserve
            members who meet the service requirements may be eligible.
            Additionally, some surviving spouses of veterans may qualify.
          </Text>

          <Text style={styles.faqQuestion}>
            What can a VA Loan be used for?
          </Text>
          <Text style={styles.faqAnswer}>
            VA Loans can be used to purchase a home, build a new home, make home
            improvements, or refinance an existing mortgage. There are also
            specific types of VA Loans available for different needs, such as
            Interest Rate Reduction Refinance Loans (IRRRL) and Native American
            Direct Loans (NADL).
          </Text>

          <Text style={styles.faqQuestion}>
            What are the benefits of a VA Loan?
          </Text>
          <Text style={styles.faqAnswer}>
            Some of the primary benefits include no down payment required in
            most cases, no PMI requirement, competitive interest rates, and
            limited closing costs. Additionally, VA Loans are more lenient with
            credit requirements than conventional loans.
          </Text>
          <Text style={styles.faqQuestion}>What is a VA funding fee?</Text>
          <Text style={styles.faqAnswer}>
            The VA funding fee is a one-time payment required by the Department
            of Veterans Affairs for VA home loans. The fee varies based on the
            type of loan, the down payment amount, and whether it's the
            borrower's first VA loan. Veterans with service-connected
            disabilities may be exempt from paying this fee, making
            homeownership more affordable.
          </Text>

          <Text
            style={theme.link}
            onPress={() =>
              Linking.openURL(
                "https://www.va.gov/housing-assistance/home-loans/"
              )
            }
          >
            Learn more about the VA Loan on the VA website
          </Text>
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
  tabSubtitle: {
    fontSize: "14px",
    color: "grey",
  },
  content: {
    padding: 10,
    backgroundcolor: "transparent",
    marginBottom: 5,
  },
  section: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
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
  faqAnswer: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  faqQuestion: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
});
