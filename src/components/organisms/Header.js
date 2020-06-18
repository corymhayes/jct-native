import React from 'react'
import { View, TouchableOpacity, Text, StatusBar, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = props => {
  const navigation = useNavigation()

  return(
    <>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: '#292929', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ alignSelf: 'flex-end', marginBottom: 20, marginLeft: 30 }}>  
          <Image source={require('../../assets/images/menu-icon.png')} style={{ width: 25, height: 25 }}/>
        </TouchableOpacity>
        <View style={{ alignSelf: 'flex-end', flex: 1, alignItems: 'center', marginBottom: 20, marginRight: 25 }}>
          <Text style={{ color: '#fff', fontFamily: 'Industry', fontSize: 20, fontWeight: 'bold' }}>{props.siteTitle}</Text>
          <Text style={{ color: '#fff', fontFamily: 'Industry', fontSize: 16 }}>01/01/2020 - 10:20 PM</Text>
        </View>
        <View onPress={() => {props.openAlarmsDrawer}} style={{ alignSelf: 'flex-end', marginBottom: 20, marginRight: 30 }}>  
          {/* <Image source={require('../../assets/images/alarm-icon.png')} style={{ width: 25, height: 25 }}/> */}
        </View>
      </View>
      <View style={{ flex: 7 }}>
        { props.children }
      </View>
    </>
  )
}

export default Header