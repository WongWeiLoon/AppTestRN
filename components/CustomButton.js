import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const CustomButton = (props) => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...props.style }}  onPress={props.onPressButton}>
      <Text style={{...styles.textStyle, ...props.btnTextStyle}}>{props.btnLabel}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'tomato',
    //padding: 10,
    flex:1,
    borderRadius: 10, 
    justifyContent: "center"
  },
  textStyle: {
    color: '#ff8c00',
    fontSize: 19, 
  },
});
