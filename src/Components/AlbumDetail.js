

import React from 'react'
import {View,Text} from 'react-native'
import Card from './Card'

const AlbumData = (props)=>{
  return(
<Card>
<Text>{props.albums.title}</Text>
</Card>
  )
}

export default AlbumData
