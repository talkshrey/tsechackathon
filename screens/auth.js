import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import TouchId from 'react-native-touch-id';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Home } from './Home';
import BottomTabs from './bottomtabs';

const Stack = createNativeStackNavigator();


export default function Auth() {
  TouchId.authenticate('Place your fingerprint!', {
    title: 'Authentication',
  })
    .then(() => {
      Alert.alert('Authentication Successful!');
    })
    .catch(() => {
      Alert.alert('Fingerprint Did not match');
    });

  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="bottomtabs" component={BottomTabs}  options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19181f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    backgroundColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});