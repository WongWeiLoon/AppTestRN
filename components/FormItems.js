import React from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';

export const FormItems = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }} > 
      <Text style={{...styles.textStyle, ...props.btnTextStyle}}>{props.txtlabel}</Text>
      
      <TextInput 
        onChangeText={props.onChangingText}
        style={styles.txtinput} 
        value={props.txtValue} 
        autoFocus={props.autoFocus}
        returnKeyType="next" 
        blurOnSubmit={false}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {  
    paddingVertical: 10,  
    marginHorizontal: 25,
    flexDirection: "row", 
  },
  textStyle: {
    flex: 1,
    color: 'black',
    fontSize: 16,  
    alignSelf: 'center'
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
