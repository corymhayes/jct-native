import React, { useState, useEffect } from 'react'
import { View, Text, Button, StatusBar, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import {  } from '@react-navigation/drawer'

import Header from './organisms/Header'
import TankComp from './molecules/TankComp'
import Gauge from './atoms/Gauge'

const TankTemp = props => {
  return(
    <>
      <Header nav={navigation}>
        <TankComp tankType="Water">
          <Gauge tankName="Tank 1" currentLevel={4.8} tankLevel={16} />
          <Gauge tankName="Tank 1" currentLevel={4.8} tankLevel={16} />
        </TankComp>

        <TankComp tankType="Oil">
          <Gauge tankName="Tank 1" currentLevel={4.8} tankLevel={16} />
          <Gauge tankName="Tank 1" currentLevel={4.8} tankLevel={16} />
        </TankComp>
      </Header>
    </>
  )
}

export default HomeScreen