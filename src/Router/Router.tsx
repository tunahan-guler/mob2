import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

const AppNav = createNativeStackNavigator();

const Comp = () => (
  <View>
    <Text className="text-primary font-bold">
      INSIDE NAVIGATION PRIMARY WITHOUT VARIABLE
    </Text>
    <Text className="text-variable-primary font-bold">
      INSIDE NAVIGATION PRIMARY WITH VARIABLE
    </Text>
  </View>
);

const Router = () => {
  return (
    <AppNav.Navigator>
      <AppNav.Screen name="Test" component={Comp} />
    </AppNav.Navigator>
  );
};

export default Router;
