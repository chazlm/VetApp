import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";

const BDD = ({ isCollapsed, toggle, theme }) => {
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={theme.tabHeader}>
          Benefits Delivery at Discharge
          <Text style={styles.tabSubtitle}> (Entryway to VA Disability)</Text>
        </Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.header}>
            BDD (Benefits at Discharge) helps servicememebers get their
            disability rating faster. This is the best and quickest way to
            receive your rating with the most accuracy.
          </Text>
          <Text style={styles.section}>
            VA Disability Benefits can be ridiculed amongst servicemembers
            because everybody wants to be tough. "I have knee pain from time to
            time but it's not like my legs are blown off" That, is not the way
            you want to approach disability benefits. You've done your time, lay
            the cammies down and think about your future as a civilian.
          </Text>
          <Text style={styles.section}>A couple points I want to make:</Text>
          <Text style={styles.bulletPoint}>
            • You will get old. I left the Marine Corps as a 24 year old who had
            knee problems when it was cold. Fast forward 4 years and it becomes
            a daily issue, who knows what the conditions will be in 10 more
            years? Remember, you are preparing for the future, not just right
            now.
          </Text>
          <Text style={styles.bulletPoint}>
            • BDD is first choice. After that, it gets much tougher. Not saying
            it can't be done, but VA will consider anything within a year from
            separation to be service-connected. After that, good luck. Even
            during this year you will have trouble getting it done because there
            can be a lot of appointments to get to and you will be moving
            around, starting school or a job, and next thing you know a year has
            gone by, you still haven't filed and now it's going to much much
            harder to get service connected for your back pain and sleep apnea.
            File ASAP.
          </Text>
          <Text style={styles.bulletPoint}>
            • A key factor in this process will be your medical records from
            your time in and final physical. Your final physical will be your
            last catch-all to document everything wrong with you. Be honest, and
            don't feel like you need to be a tough guy here because getting
            benefits can be very cumbersome if you're not dilligent.
          </Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: "2px",
            }}
          />
          <Text style={styles.section}>
            The Benefits Delivery at Discharge (BDD) program allows service
            members to apply for VA disability compensation benefits 180 to 90
            days before separation from active duty. This program helps expedite
            the claims process, aiming to deliver a decision within 30 days of
            discharge. Key requirements include:
          </Text>
          <Text style={styles.bulletPoint}>
            • Submit claims between 180 and 90 days prior to separation.
          </Text>
          <Text style={styles.bulletPoint}>
            • Provide service treatment records and complete a Separation Health
            Assessment.
          </Text>
          <Text style={styles.bulletPoint}>
            • Be available for VA exams within 45 days of claim submission.
          </Text>
          <Text style={styles.section}>
            Certain serious conditions and foreign claims are excluded. To
            apply, service members can file online via the VA website, mail
            their application, or visit a local VA office.
          </Text>
          <Text
            style={theme.link}
            onPress={() =>
              Linking.openURL(
                "https://benefits.va.gov/BENEFITS/benefits-delivery-discharge-program.asp"
              )
            }
          >
            Learn more about the BDD program
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
    marginBottom: 20,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10,
  },
  header: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default BDD;
