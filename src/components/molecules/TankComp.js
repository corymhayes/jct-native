import React from 'react'
import { View } from 'react-native'

import TankLabel from '../atoms/TankLabel'

const TankComp = props => {
  return(
    <View style={{ marginTop: 30}}>
      <TankLabel tankType={ props.tankType } />
      <View style={{ alignItems: 'flex-start', flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
        { props.children }
      </View>
    </View>
  )
}

export default TankComp