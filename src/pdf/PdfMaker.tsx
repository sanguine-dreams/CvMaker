
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { MyFormValues } from "../entities/Entities";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 16
  },
  section: {
    margin: 2,
    padding: 2,
    flexGrow: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",

  },

  divider: {
    borderBottom: "1px solid black", // You can adjust the color and style as needed
    marginBottom: 5,
  },

  miniDivier: {
    borderBottom: "1px dashed black", // You can adjust the color and style as needed
    margin: 15,
  }, 

  content: {
    padding: 4
  }


});

const MyDocument = ({ CvC }: { CvC: MyFormValues }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Contact Info</Text>
        <View style={styles.divider}></View>
        <Text style={styles.content} >Full Name: {CvC.name}</Text>
        <Text style={styles.content}>E-mail: {CvC.email}</Text>
        <Text style={styles.content}>Phone Number: {CvC.phone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Work Experience</Text>
        <View style={styles.divider}></View>
        {CvC.work.map((work, index) => (
          <View key={index}>
            <Text style={styles.content}>{`Job Title: ${work.jobTitle}`}</Text>
            <Text style={styles.content}>{`Job City: ${work.jobCity}`}</Text>
            <Text style={styles.content}>{`Employer: ${work.employer}`}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Education</Text>
        <View style={styles.divider}></View>
        {CvC.edu.map((education, index) => (
          <View key={index}>
            <Text style={styles.content}>{`City: ${education.eduCity}`}</Text>
            <Text style={styles.content}>{`School: ${education.school}`}</Text>
            <Text style={styles.content}>{`Degree: ${education.degree}`}</Text>
            <View style={styles.miniDivier} ></View>
          </View>
          
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.divider}></View>
        {CvC.skills.map((skill, index) => (
          <View key={index}>
            <Text style={styles.content}> * {skill}</Text>
          
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>References</Text>
        <View style={styles.divider}></View>
        {CvC.references.map((reference, index) => (
          <View key={index}>
            <Text style={styles.content}>{`Reference: ${reference.reference}`}</Text>
            <Text style={styles.content}>{`Reference Contact: ${reference.contact}`}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
