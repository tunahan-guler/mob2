import React from 'react';
import './global.css';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router/Router';
import {Text} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Text className="text-primary ">
        OUTSIDE NAVIGATION PRIMARY WITHOUT VARIABLE
      </Text>
      <Text className="text-variable-primary">
        OUTSIDE NAVIGATION PRIMARY WITH VARIABLE
      </Text>
      <Router />
    </NavigationContainer>
  );
};

export default App;
