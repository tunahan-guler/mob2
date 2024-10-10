import React, {useEffect, useState} from 'react';
import './global.css';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router/Router';
import {Text} from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setBgColor('text-primary');
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Text className={`${bgColor}`}>
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
