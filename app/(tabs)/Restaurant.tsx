import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Searchbar } from 'react-native-paper';
import { SetStateAction } from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import ResScreen from '../../features/restaurant/screens/ResScreen';


export default function TabOneScreen() {

  return (
    <>
      <ResScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  searchBar: {
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
