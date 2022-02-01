import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Background = props => {
  return(
    <View>
      <View style={{...styles.backgroundTop, ...props.style} }></View>
      <View style={styles.backgroundBottonBack}>
        <View style={styles.backgroundBottonFront}>{props.children}</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundTop:{
    backgroundColor: '#11EE99',
    width: '100%',
    borderBottomLeftRadius: 100
  },
  backgroundBottonBack:{
    backgroundColor: '#11EE99',
    width: '100%',
    height: '100%'
  },
  backgroundBottonFront:{
    backgroundColor: '#FFFFFF',
    width:'100%',
    height: '100%',
    borderTopRightRadius: 100
  }
})

export default Background