import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme, useContext, Button, Switch, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Alcometer from './components/alcometer'
import styles from './style/style';
import theme from './style/theme';
import themeContext from './style/themeContext';
import { EventRegister } from 'react-native-event-listeners';

export default function App() {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
    }
  );
  return () => {
    EventRegister.removeEventListener(eventListener);
  };
  });

  return (
    <themeContext.Provider value={mode === true ? theme.light : theme.dark}>      
        <Alcometer/>
    </themeContext.Provider>
  );
}

