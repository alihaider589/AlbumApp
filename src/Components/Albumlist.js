/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Axios from 'axios'
import AlbumData from './AlbumDetail'
import Card from './Card'

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
      return  this.state.albums.map(albums=>
<AlbumData key={albums.title}  albums={albums}/>
      )
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
