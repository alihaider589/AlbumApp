/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Axios from 'axios'

export default class MyComponent extends Component {
  state={
    albums:[]
  }
  componentWillMount(){
// axios.get('https //rallycoding.herokuapp.com/api/music_albums').then(response=>console.log(response))
Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => this.setState({albums:response.data}))

      }

      renderAlbums(){
      return  this.state.albums.map(albums=><Text key={albums.title}>{albums.title}</Text>)
      }
  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
    {this.renderAlbums()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
justifyContent:'center',
alignItems:'center',
marginTop:60
  },
});
