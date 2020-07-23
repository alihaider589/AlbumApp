import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header'
import AlbumList from './src/Components/Albumlist'

export default function App() {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
