import React, { useState, useEffect } from 'react'
import { View, Text, Button, StatusBar, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import SideMenu from 'react-native-sidebar'
import { NavigationControlller } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Header from '../../organisms/Header'
import TankComp from '../../molecules/TankComp'
import Gauge from '../../atoms/Gauge'
import DetailsScreen from '../../DetailsScreen'
import Menu from '../../Menu'
import AlarmScreen from './AlarmScreen'

const LevelsScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator()
  const [jctData, setJctData] = useState()
  const [isLoading, setLoading] = useState(true)
  const [alarmOpen , setAlarmOpen] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://192.168.1.91:3030/jct/bty')
      const data = await res.json()

      setJctData( data[0] )
      setLoading(false)
    }
    
    getData()
  }, [])

  return(  
    <Header siteTitle="BTY">
      <TankComp tankType="Water">
        {/* <Gauge tankName="Tank 1" currentLevel={jctData.WT1Level} tankLevel={jctData.WTHight} />
        <Gauge tankName="Tank 2" currentLevel={jctData.WT2Level} tankLevel={jctData.WTHight} /> */}
      </TankComp>
        
      <TankComp tankType="Oil">
        {/* <Gauge tankName="Tank 1" currentLevel={jctData.OT1Level} tankLevel={jctData.OTHight} />
        <Gauge tankName="Tank 2" currentLevel={jctData.OT2Level} tankLevel={jctData.OTHight} /> */}
      </TankComp>
    </Header>
  )
}

export default LevelsScreen