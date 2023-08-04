import React from "react";
import "./FeedbackInputModal.css";
import { useState,useRef } from "react";
import {Button, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useGlobalContext } from "../../context/QuestionContext";
import { Document, Page, Text, Image, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';



const styles = {
  modal: { padding: "5% 10%", borderRadius: "10px" },
  header: {
    paddingTop: 30,
    fontSize: 45,
  },
  button: {
    width: "80%",
    background: "#9389E3 0% 0% no-repeat padding-box",
    textTransform: "uppercase",
  },
  form: { textAlign: "-webkit-center", padding: "3% 14%" },

  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0,
    // borderColor: "#000",
    alignItems: "center",
    height: 40,
    fontStyle: "bold",
  },
  tableCell: {
    width: "33.33%",
    // borderRightWidth: 1,
    borderColor: "#000",
    paddingLeft: 8,
  },
  address:{fontSize: 12},
  adminEmail:{fontSize: 12 ,color:'blue'},
  report:{fontWeight: "bold", fontSize: 19, textAlign: "center"},
  page: { padding: 60 },
  logo: { width: "12%", marginBottom: 10 },
  title: { fontWeight: "bold", fontSize: 18, textAlign: "left" },
  name: { fontSize: 14, marginBottom: 5,textTransform: "uppercase" },
  email: { fontSize: 14, marginBottom: 20 },
  table: { width: "100%" },
  tableRow: { display: 'flex', flexDirection: "row", borderBottomWidth: 1, borderColor: "whitesmoke", alignItems: "center", height: 40 },
  tableIndex: { borderColor: "#000", alignItems: "left" , width: 50, fontSize: 14},
  tableImg: {  borderColor: "#000", alignItems: "center" , width: 50, padding: 5},
  tableChakra: {borderColor: "#000", alignItems: "center" , width: 300, fontSize: 14},
  tableBool: {borderColor: "#000", alignItems: "right" , width: 40, fontSize: 14},
  tableHeader: { backgroundColor: "#f0f0f0", fontWeight: "bold", fontSize: 14 },
  // cell: { display:'flex',flexGrow: 1},
  tableIndexHeading: { alignItems: "left" , width: 50, fontSize: 16},
  tableImgHeading: { alignItems: "center" , width: 50, fontSize: 16},
  tableChakraHeading: { alignItems: "center" , width: 300, fontSize: 16},
  tableBoolHeading: {display:'flex',flexGrow: 1, alignItems: "right" , width: 40, fontSize: 16},
};

const FeedbackInputModal = () => {
  const {
    userData,
    setUserData,
    feedbackExit, setFeedbackExit,
    answersList,
    setAnswerList
  } = useGlobalContext();

  const handleDownload = () =>{
    setTimeout(() => {
      setFeedbackExit(false);
      setAnswerList([])
    }, 500);
  };
 
  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  
  const MyDocument = () => (
    <Document>
        <Page style={styles.page}>
      <View>
        <Image style={styles.logo} src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/logo.png" />
        <Text style={styles.title}>Secret Of Aura</Text>
        <Text style={styles.address} >  603, 6TH FLR, LAXMI PLAZA, LAXMI IND ESTATE,{''}</Text>
        <Text style={styles.address}>NEW LINK ROAD, ANDHERI WEST, MUMBAI CITY, MH, 400053, INDIA</Text>
        <Text style={styles.address}>Contact No - 8591965698</Text>
        <Text style={styles.adminEmail}>connect@secretsodaura.com</Text>
        <Text style={styles.report}>Chakra Report</Text>
        <Text style={styles.name}>Name: {userData ? userData.firstName + " " + userData.lastName : " "}</Text>
        <Text style={styles.email}>Email: {userData ? userData.email : " "}</Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
        <View style={styles.tableIndexHeading}>
            <Text >Sr.No</Text>
        </View>
        <View style={styles.tableImgHeading}>
            <Text >Chakra</Text>
        </View>
        <View style={styles.tableChakraHeading}>
            <Text >Chakra Name</Text>
        </View>
        <View style={styles.tableBoolHeading}>
            <Text >Status</Text>
        </View>          
          {/* <Text style={styles.tableImgHeading}>Chakra</Text>
          <Text style={styles.tableChakraHeading}>Chakra Name</Text>
          <Text style={styles.tableBoolHeading}>Status</Text> */}
        </View>
        {answersList.map((data, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.tableIndex}>
              <Text >{data.number}</Text>
            </View>
            <View style={styles.tableImg}>
              <Image style={{ width: "100%", textAlign:"left"}} src={data?.image} />
            </View>
            <View style={styles.tableChakra}>
              <Text >{data.chakraName}</Text>
            </View>
            <View style={styles.tableBool}>
              <Text >{data.ans > 5 ? "Opened" : "Closed"}</Text>
            </View>
            
          </View>
        ))}
      </View>
    </Page>
    </Document>
  );

  return (
    <>
      <Modal
        show={feedbackExit}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="SOA-modal "
        dialogClassName="modal-90w"
        onHide={() => setFeedbackExit(false)}
        style={styles.modal}
      >
        <Modal.Title style={styles.header}>Help Us With Your</Modal.Title>

        <Modal.Body>
          <div style={{}}>
            <Form style={styles.form}>
              <Form.Group
                style={{ width: "80%" }}
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) => onInputChange(e)}
                  style={{
                    textTransform: "uppercase",
                  }}
                />
              </Form.Group>
              <Form.Group
                style={{ width: "80%" }}
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={(e) => onInputChange(e)}
                  style={{
                    textTransform: "uppercase",
                  }}
                />
              </Form.Group>
              <Form.Group
                style={{ width: "80%" }}
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email ID"
                  name="email"
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Group>
              <PDFDownloadLink document={<MyDocument />} fileName="Report.pdf" onClick={handleDownload}>
              {({ blob, url, loading, error }) =>
              // loading ? 
              // <Button>Loading Document...</Button> : 
              <Button variant="primary"
              style={styles.button}
              
              >Download Report</Button>
              }
              </PDFDownloadLink>
            </Form>
          </div>
        </Modal.Body>
      </Modal>  
      </>
      
    
  );
};


export default FeedbackInputModal;
