import React from 'react'
import { View, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

const SitesDrawer = props => {
  return(
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('../../assets/images/mammoth-logo.png')} style={{ width: 144, height: 78, marginBottom: 20 }} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default SitesDrawer