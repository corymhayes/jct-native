/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Svg} from 'react-native-svg'

import { VictoryPie, VictoryLabel, VictoryContainer } from 'victory-native'


const Gauge = props => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ alignSelf: 'center', marginRight: 10, fontFamily: 'Industry', fontWeight: 'bold', fontSize: 22 }}>{props.tankName}</Text>
      <Svg width={100} height={100} style={{ marginTop: 10, marginRight: 10 }}>
        <VictoryPie 
          data={[ props.currentLevel, (props.tankLevel - props.currentLevel) ]}
          startAngle={ -155 }
          endAngle={ 155 }
          innerRadius={ 38 }
          width={ 100 }
          height={ 100 }
          style={{
            parent: {
              backgroundColor: 'red'
            }
          }}
          colorScale={[ 'lightgreen', 'rgba(0,0,0,.1)' ]}
          labels={[]}
          standalone={false}
          padding={{ top: 0, bottom: 0 }}
        />
        <VictoryLabel
          textAnchor="middle" verticalAnchor="middle"
          x={50} y={50}
          style={{ fontSize: 20, color: 'blue', fontFamily: 'Industry', fontWeight: 'bold' }}
          text={`${ props.currentLevel }ft`}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  gaugeStyle: {
    backgroundColor: 'red'
  }
});

export default Gauge;
