import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Collapsible from "react-native-collapsible";

export const GIBillContent = ({ isCollapsed, toggle }) => {
  return (
    <SafeAreaProvider>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={styles.tabTitle}>GI Bill</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.section}>
            The GI Bill is a significant benefit provided to veterans and
            service members, offering financial assistance for education and
            training. It was initially introduced after World War II to help
            returning soldiers reintegrate into civilian life by providing them
            with opportunities for higher education. Over the years, the GI Bill
            has evolved, with the most current version being the Post-9/11 GI
            Bill.
          </Text>
          <Text style={styles.section}>Key Points:</Text>
          <Text style={styles.bulletPoint}>
            • The Post-9/11 GI Bill covers tuition and fees, provides a monthly
            housing allowance, and includes a stipend for books and supplies. It
            can be used for undergraduate and graduate degrees, vocational
            training, flight training, and more.
          </Text>
          <Text style={styles.bulletPoint}>
            • Eligibility is generally based on active duty service after
            September 10, 2001. Service members must have served at least 90
            days of aggregate service to qualify for partial benefits, with full
            benefits available to those who served 36 months or more.
          </Text>
          <Text style={styles.bulletPoint}>
            • The GI Bill also includes a transferability option, allowing
            service members to transfer their benefits to their spouse or
            dependent children under certain conditions.
          </Text>

          <Text style={styles.section}>FAQs:</Text>
          <Text style={styles.faqQuestion}>
            Who is eligible for the GI Bill?
          </Text>
          <Text style={styles.faqAnswer}>
            Eligibility for the Post-9/11 GI Bill is primarily based on active
            duty service after September 10, 2001. Service members must have
            served at least 90 days of aggregate service to qualify for partial
            benefits, or 36 months for full benefits. Veterans with an honorable
            discharge are typically eligible.
          </Text>

          <Text style={styles.faqQuestion}>
            What expenses does the GI Bill cover?
          </Text>
          <Text style={styles.faqAnswer}>
            The Post-9/11 GI Bill covers up to 100% of tuition and fees at
            public schools for in-state students. It also provides a monthly
            housing allowance based on the location of the school, a stipend for
            books and supplies (up to $1,000 per year), and a one-time rural
            benefit payment for certain eligible veterans.
          </Text>

          <Text style={styles.faqQuestion}>
            Can I transfer my GI Bill benefits to my family?
          </Text>
          <Text style={styles.faqAnswer}>
            Yes, service members may transfer unused GI Bill benefits to their
            spouse or dependent children if they meet specific service
            requirements. Generally, service members must have at least six
            years of service and agree to serve four more years to transfer
            benefits.
          </Text>

          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.va.gov/education/about-gi-bill-benefits/"
              )
            }
          >
            Learn more about the GI Bill on the VA website
          </Text>

          {/* Add any additional components like calculators or further resources here */}
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
    padding: 20,
    backgroundColor: "#ffffff",
  },
  section: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  chartContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  link: {
    fontSize: 16,
    color: "#2d9cdb",
    textDecorationLine: "underline",
  },
});
