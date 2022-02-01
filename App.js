import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App = () => {
  return(
    <View>
      <Text style={styles.text}>Primeira Página</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  text:{
    fontSize: 18
  }
})

export default App