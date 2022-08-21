import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Image,
} from 'react-native';

const localData = require('../data.json');
const IMG_URI = require('../assets/images/dummyImg.jpeg'); 

export const Screen1 = ({navigation}) => { 
  onPressItem = item => {
    //console.log(item);
    navigation.navigate('Screen2', item)
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.listContainer}
        data={localData}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.RenderSeparator}
      />
    </SafeAreaView>
  );
};

const renderListItem = ({item}) => (
  <TouchableHighlight
    onPress={this.onPressItem.bind(this, item)}
    underlayColor="white">
    <View style={styles.inlineListBox}>
      <Image style={styles.image} source={IMG_URI} />
      <Text style={styles.paragraph}>
        {item.firstName} {item.lastName}
      </Text>
    </View>
  </TouchableHighlight>
);

RenderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
        marginVertical: 10,
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  inlineListBox: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  paragraph: {
    margin: 12,
    fontSize: 16,
    alignSelf: 'center',
    //fontWeight: 'bold',
  },
});
