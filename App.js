import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screen1} from './screens/Screen1';
import {Screen2} from './screens/Screen2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={() => ({
            title: 'Contacts',
            headerLeft: () => (
              <IconButton
                onPress={() => alert('Search contacts')}
                icon="magnify"
                size={27}
                color="#ff8c00"
              />
            ),
            headerRight: () => (
              <IconButton
                onPress={() => alert('Add new contacts')}
                icon="plus"
                size={27}
                color="#ff8c00"
              />
            ),
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />

        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

export default App;
