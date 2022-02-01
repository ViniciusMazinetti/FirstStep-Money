import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { ScrollView } from 'react-native-web'
import piggyBank from '../../../assets/images/piggyBank.png'
import Timeline from 'react-native-timeline-flatlist'


const App = () => {
  var data = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
  ]
  return(
    <View >
      <View style={styles.header}>
      </View>
      
      <View>

        <View style={styles.statement}>

          <View style={styles.statementInfo}>
            <Text>Salário</Text>
            <Text>R$1200,00</Text>
          </View>

          <Image style={styles.icon} source={piggyBank}/>

          <Timeline
          data={data}
        />

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  header: {
    backgroundColor: `#11EE99`,
    height: '40%',
  },

  icon: {
    height: 62,
    width: 67
  },

  statement: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },


})



export default App
