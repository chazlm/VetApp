import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";

export const DisabilityFAQ = ({ isCollapsed, toggle, theme }) => {
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.tab}>
        <Text style={styles.tabTitle}>Disability FAQ</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          <Text style={styles.question}>
            What is VA Disability Compensation?
          </Text>
          <Text style={styles.answer}>
            VA Disability Compensation is a tax-free monetary benefit paid to
            veterans with disabilities resulting from diseases or injuries
            incurred or aggravated during active military service. It also
            covers post-service disabilities related to service. Compensation
            amounts vary based on the degree of disability (rated from 0% to
            100%) and the number of dependents.
          </Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.va.gov/disability/how-to-file-claim/"
              )
            }
          >
            VA Website to Submit a Claim
          </Text>
          <Text style={styles.question}>
            How do I apply for VA disability benefits?
          </Text>
          <Text style={styles.answer}>
            Veterans can apply for VA disability benefits in three ways:
            {"\n"}1. <Text style={styles.bold}>Online</Text>: Through the VA’s
            eBenefits portal. This is the most convenient and quickest method.
            {"\n"}2. <Text style={styles.bold}>By Mail</Text>: Download and fill
            out VA Form 21-526EZ, "Application for Disability Compensation and
            Related Compensation Benefits," and send it to the appropriate VA
            regional office.
            {"\n"}3. <Text style={styles.bold}>In Person</Text>: Visit a VA
            regional office to apply. It can be helpful to bring supporting
            documents such as medical records, service records, and statements
            from fellow service members to bolster your claim.
          </Text>

          <Text style={styles.question}>
            What are Veteran Service Organizations (VSOs)?
          </Text>
          <Text style={styles.answer}>
            Veteran Service Organizations (VSOs) support and advocate for
            veterans, providing assistance with VA claims, representation, and
            various support services. Well-known VSOs include the American
            Legion, Disabled American Veterans (DAV), and Veterans of Foreign
            Wars (VFW). You can find a VSO through the [VA's VSO
            Directory](https://www.va.gov/vso/).
          </Text>

          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL("https://www.va.gov/ogc/recognizedvsos.asp")
            }
          >
            VSO Info
          </Text>

          <Text style={styles.question}>
            Can I receive both VA disability compensation and military
            retirement pay?
          </Text>
          <Text style={styles.answer}>
            Yes, you can receive both, but there are specific conditions. This
            is known as Concurrent Retirement and Disability Pay (CRDP). To
            qualify:
            {"\n"}- You must be a military retiree.
            {"\n"}- You must have a combined disability rating of 50% or higher.
            {"\n"}CRDP allows eligible retirees to receive both their full
            military retirement pay and their VA disability compensation without
            a reduction in either benefit.
          </Text>

          <Text style={styles.question}>
            What is Individual Unemployability (IU)?
          </Text>
          <Text style={styles.answer}>
            Individual Unemployability, or IU, is a part of VA's disability
            compensation program that allows the VA to pay certain veterans
            disability compensation at the 100% rate, even if their
            service-connected disability is rated less than 100%. To qualify,
            veterans must demonstrate that they cannot secure or maintain
            substantially gainful employment due to their service-connected
            disabilities.
          </Text>

          <Text style={styles.question}>
            How often does the VA review disability ratings?
          </Text>
          <Text style={styles.answer}>
            The VA reviews disability ratings periodically to ensure veterans
            receive the appropriate level of compensation for their current
            condition. The frequency of these reviews depends on the likelihood
            of improvement:
            {"\n"}- <Text style={styles.bold}>Frequent Reviews</Text>: If a
            condition is expected to improve, the VA may schedule periodic
            re-examinations.
            {"\n"}- <Text style={styles.bold}>Stable Conditions</Text>: Veterans
            with stable and long-term disabilities or conditions unlikely to
            improve may have their ratings considered permanent, reducing the
            need for future examinations.
          </Text>

          <Text style={styles.question}>What is the 5-Year Rule?</Text>
          <Text style={styles.answer}>
            The 5-year rule means that if your VA disability rating has been in
            place for five years or more and has not shown any significant
            improvement, the VA cannot reduce your rating unless there is
            substantial evidence that your condition has improved significantly.
            This rule protects veterans from arbitrary reductions in their
            disability rating.
          </Text>

          <Text style={styles.question}>What is the 10-Year Rule?</Text>
          <Text style={styles.answer}>
            The 10-year rule provides that if a veteran has been rated as
            service-connected for a condition for ten years or more, the VA
            cannot terminate service connection for that condition. While the VA
            can reduce the disability rating if there is evidence of
            improvement, they cannot completely sever the connection to the
            service.
          </Text>

          <Text style={styles.question}>What is the 20-Year Rule?</Text>
          <Text style={styles.answer}>
            The 20-year rule ensures that if a veteran has been receiving a VA
            disability rating for 20 years or more, the VA cannot reduce the
            rating below the lowest level of disability assigned during that
            period, except in cases of fraud. This rule offers long-term
            stability for veterans with longstanding disability ratings.
          </Text>

          <Text style={styles.question}>
            What can cause a veteran to lose their benefits?
          </Text>
          <Text style={styles.answer}>
            Veterans can lose their benefits if:
            {"\n"}1.{" "}
            <Text style={styles.bold}>Clear and Unmistakable Error</Text>: If
            the VA determines there was an error in the initial rating decision.
            {"\n"}2. <Text style={styles.bold}>Significant Improvement</Text>:
            If a veteran's condition shows substantial improvement upon review.
            {"\n"}3. <Text style={styles.bold}>Felony Conviction</Text>: If a
            veteran is convicted of a felony and imprisoned for more than 60
            days, their compensation is reduced. Benefits can be reinstated upon
            release.
          </Text>

          <Text style={styles.question}>How can I request my C-File?</Text>
          <Text style={styles.answer}>
            A C-File contains all documents related to your VA claims. Request
            it to review your records and ensure accuracy. You can request it
            online through the VA’s eBenefits portal, by mail to your regional
            VA office, or in person. Reviewing your C-File helps in
            understanding your claims and preparing for appeals if necessary.
          </Text>
          <Text style={styles.question}>
            What are Special Monthly Compensation (SMC) Codes?
          </Text>
          <Text style={styles.answer}>
            Special Monthly Compensation (SMC) is an additional tax-free benefit
            that can be paid to veterans, their spouses, surviving spouses, and
            parents. SMC is a higher rate of compensation due to special
            circumstances such as the need for aid and attendance by another
            person, or specific disabilities like loss of use of one or more
            limbs. SMC codes, such as SMC-K (for loss of use of creative organ)
            or SMC-L (for regular aid and attendance), determine the amount of
            additional compensation.
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
  tabTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tabSubtitle: {
    fontSize: "14px",
    color: "grey",
  },
  content: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  section: {
    fontSize: 16,
    marginBottom: 50,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10,
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
  header: {
    fontSize: 16,
    marginBottom: 50,
    fontWeight: "bold",
  },
});
