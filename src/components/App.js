/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import BTY from './JCT/bty/BTY'
import jctbty from './JCT/jctbty/jctbty'
import North from './JCT/north/North'
import DetailsScreen from './DetailsScreen'
import SitesDrawer from './organisms/SitesDrawer'



const App = () => {
  const Drawer = createDrawerNavigator()
  
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={ props => <SitesDrawer {...props} />}
        drawerStyle={{
          backgroundColor: '#292929'
        }}
        drawerContentOptions={{
          activeBackgroundColor: '#ff7e26',
          itemStyle: {
            width: '100%',
            borderRadius: 0,
          },
          labelStyle: {
            color: '#fff',
            fontFamily: 'Industry',
            fontSize: 18,
          }
        }}
      >
        <Drawer.Screen name="BTY" component={BTY} />
        <Drawer.Screen name="North" component={North} />
        <Drawer.Screen name="JCTBTY" component={jctbty} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
