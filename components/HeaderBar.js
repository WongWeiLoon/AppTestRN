import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

import {CustomButton} from './CustomButton.js';

export const HeaderBar = props => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View>
          <CustomButton
            btnLabel="Cancel"
            btnTextStyle={styles.btnTextContainer}
            onPressButton={props.onPressHeaderLeft}
          />
        </View>

        <Text style={styles.txtLabel}>{props.headerTitle}</Text>

        <View>
          <CustomButton
            btnLabel="Save"
            btnTextStyle={styles.btnTextContainer}
            onPressButton={props.onPressHeaderRight}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3f3f3',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 0.5,
  },
  txtLabel: {
    fontSize: 15,
    alignSelf: 'center',
    //fontWeight: 'bold',
  },
  btnTextContainer: {
    fontSize: 16,
    alignSelf: 'center',
  },
});
