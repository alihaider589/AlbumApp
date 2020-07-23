

import React from 'react'
import { View, Text, StyleSheet, Image ,TouchableOpacity, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumData = ({albums}) => {
  const {title,artist,thumbnail_image,image,url } = albums
  return (
    <Card>
      <CardSection>
        <View>
<Image 
style={styles.thumbnailstyle  }
source={{uri:thumbnail_image}}
/>
        </View>
        <View style={styles.headercontent}>

          <Text styles={{fontSize:25}}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
        <CardSection>
          <Image 
          style={styles.imageStyle}
          source={{uri:image}}/>
        </CardSection>
        <CardSection>
<Button 
onPress={()=>Linking.openURL(url)}
/>
        </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headercontent: {
    flexDirection: "column",
    justifyContent: 'space-around'
  },
  thumbnailstyle:{
    height:50,
    width:50
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null
  
  },
  buttonStyle:{

  }
})
export default AlbumData
