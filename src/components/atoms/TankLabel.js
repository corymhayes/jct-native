import React from 'react'
import { View, Text } from 'react-native'

const TankLabel = props => {
  return(
    <>
      <View style={{ height: 40, width: 100, backgroundColor: '#292929', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Industry', fontWeight: '700' }}>{ props.tankType }</Text>
      </View>
    </>
  )
}

export default TankLabel