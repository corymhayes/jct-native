import * as React from 'react'
import { View, Text, Button } from 'react-native'

import Header from './organisms/Header'

const DetailsScreen = ({ navigation }) => {
  return(
    <>
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go to Details.. again" onPress={() => navigation.push('Details')} />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </>
  )
}

export default DetailsScreen