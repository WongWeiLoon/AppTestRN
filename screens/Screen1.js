import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const localData = require('../data.json');
const IMG_URI = require('../assets/images/dummyImg.jpeg');

export const Screen1 = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [userData, setUserData] = useState(localData);

  const onPressItem = item => {
    //console.log(item);
    navigation.navigate('Screen2', item);
  };

  const onPullRefresh = () => {
    setIsRefreshing(true);
    var data = require('../data.json');
    setUserData(data);
    setIsRefreshing(false);
  };

  const renderListItem = ({item}) => {
    return (
      <TouchableOpacity onPress={onPressItem.bind(this, item)}>
        <View style={styles.inlineListBox}>
          <Image style={styles.image} source={IMG_URI} />
          <Text style={styles.paragraph}>
            {item.firstName} {item.lastName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#CED0CE',
          marginVertical: 10,
        }}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.listContainer}
        data={userData}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
        onRefresh={onPullRefresh}
        refreshing={isRefreshing}
      />
    </SafeAreaView>
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
    color: 'black',
    //fontWeight: 'bold',
  },
});
