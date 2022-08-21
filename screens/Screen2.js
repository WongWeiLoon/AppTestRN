import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

import {HeaderBar} from '../components/HeaderBar';
import {HeaderSection} from '../components/HeaderSection.js';

const IMG_URI = require('../assets/images/dummyImg.jpeg');

export const Screen2 = ({route, navigation}) => {
  const {firstName, lastName, email, phone} = route.params;
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [fName, setFirstName] = useState(firstName);
  const [lName, setLastName] = useState(lastName);
  const [emailVal, setEmail] = useState(email);
  const [phoneVal, setPhone] = useState(phone);

  SaveInformation = () => {
    if (fName.trim().length === 0 || lName.trim().length === 0)
      alert("First Name or Last Name cannot be empty. Please fill in required field.")
    else {
        alert("Save it")
    }
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        onPressHeaderLeft={() => navigation.goBack()}
        onPressHeaderRight={SaveInformation}
      />

      <ScrollView
        keyboardShouldPersistTaps="never"
        keyboardDismissMode="on-drag">
        <Image style={styles.avatar} source={IMG_URI} />

        {/**
        <HeaderSection txtlabel="Main Information"/>
        <FormItems txtlabel="First Name" txtValue={fName} onChangingText={setFirstName} autoFocus={true} />
        <View style={styles.lineStyle}/>
        <FormItems txtlabel="Last Name" txtValue={lName} onChangingText={setLastName} autoFocus={false} />
        */}

        <HeaderSection txtlabel="Main Information" />
        {/** First Name  **/}
        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}> First Name </Text>

          <TextInput
            style={styles.txtinput}
            value={fName}
            onChangeText={setFirstName}
            autoFocus={true}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              lastNameRef.current.focus();
            }}
          />
        </View>
        <View style={styles.lineStyle} />

        {/** Last Name  **/}
        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}> Last Name </Text>

          <TextInput
            style={styles.txtinput}
            value={lName}
            onChangeText={setLastName}
            autoFocus={false}
            returnKeyType="next"
            ref={lastNameRef}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              emailRef.current.focus();
            }}
          />
        </View>

        <HeaderSection txtlabel="Sub Information" />
        {/** Email  **/}
        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}> Email </Text>

          <TextInput
            style={styles.txtinput}
            value={emailVal}
            autoFocus={false}
            onChangeText={setEmail}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={emailRef}
            onSubmitEditing={() => {
              phoneRef.current.focus();
            }}
          />
        </View>
        <View style={styles.lineStyle} />

        {/** Phone **/}
        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}> Phone </Text>

          <TextInput
            style={styles.txtinput}
            value={phoneVal}
            autoFocus={false}
            onChangeText={setPhone}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={phoneRef}
          />
        </View>
        <View style={styles.lineStyle} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 25,
    marginBottom: 40,
    alignSelf: 'center',
  },
  lineStyle: {
    marginLeft: 25,
    borderBottomColor: '#BCBCBD',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputContainer: {
    paddingVertical: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
  },
  textStyle: {
    flex: 1,
    color: 'black',
    fontSize: 16,
    alignSelf: 'center',
  },
  txtinput: {
    flex: 2.5,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#C1C0C1',
    padding: 7,
  },
});
