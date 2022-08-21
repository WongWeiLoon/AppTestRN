import React from 'react';
import { StyleSheet, View, Text,} from 'react-native';

export const HeaderSection = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }} >
      <Text style={{...styles.textStyle, ...props.btnTextStyle}}>{props.txtlabel}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    padding: 10,  
    paddingHorizontal: 25,
  },
  textStyle: {
    color: 'black',
    fontSize: 18, 
    fontWeight: 'bold',
  },
});
