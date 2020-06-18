import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LevelsScreen from './LevelsScreen'
import AlarmScreen from './AlarmScreen'

const North = () => {
  const Tab = createBottomTabNavigator()

  return(  
    <Tab.Navigator 
      initialRouteName="Levels"
      // screenOptions={ ({ route }) => ({
      //   tabBarIcon: ({ focused }) => {
      //     let iconName;

      //     if(route.name === 'Levels') {
      //       iconName = focused ? require('../assets/images/level-icon-active.png') : require(`../assets/images/level-icon-inactive.png`)
      //     } else if(route.name === 'Alarms') {
      //       iconName = focused ? require(`../assets/images/alarm-icon-active.png`) : require(`../assets/images/alarm-icon-inactive.png`)
      //     }

      //     console.log(iconName);
      //     // return <Image source={require(`../assets/images/${iconName}.png`)} />
      //     return <Image source={iconName} style={{ height: 20, width: 20 }} />
      //   }
      // })}
      tabBarOptions={{ 
        activeTintColor: '#fe7343', 
        inactiveTintColor: '#bdbdbd', 
        style: { backgroundColor: '#292929' },
      }}

    >
      <Tab.Screen 
        name="Levels" 
        component={ LevelsScreen } 
      />
      <Tab.Screen 
        name="Alarms" 
        component={ AlarmScreen } />
    </Tab.Navigator>
  )
}

export default North