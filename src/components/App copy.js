/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { VictoryPie, VictoryChart, VictoryContainer } from 'victory-native'
import Gauge from './atoms/Gauge'



const App = () => {
  const [jctData, setJctData] = useState([])
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: '#292929', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ alignSelf: 'flex-end', flex: 1, alignItems: 'center', marginBottom: 20 }}>
            <Text style={{ color: '#fff', fontFamily: 'Industry', fontSize: 20, fontWeight: 'bold' }}>JCT BTY</Text>
            <Text style={{ color: '#fff', fontFamily: 'Industry', fontSize: 16 }}>01/01/2020 - 10:20 PM</Text>
          </View>
        </View>
        <View style={{ flex: 7 }}>
          <View style={{ height: 40, width: 100, backgroundColor: "#292929", marginTop: 40, marginBottom: 20, justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', color: "#fff", fontWeight: 'bold', fontSize: 22, fontFamily: 'Industry' }}>Water</Text>
          </View>
            {
              isLoading ? 
                <ActivityIndicator /> 
                :
                <View style={styles.gaugeRow}>
                  <Gauge currentLevel={jctData.WT1Level} tankLevel={jctData.WTHight} tankName="Tank #1" />
                  <Gauge currentLevel={jctData.WT2Level} tankLevel={jctData.WTHight} tankName="Tank #2" />
                </View>
            }
          
          <View style={{ height: 40, width: 100, backgroundColor: "#292929", marginTop: 40, marginBottom: 20, justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', color: "#fff", fontWeight: 'bold', fontSize: 22, fontFamily: 'Industry' }}>Oil</Text>
          </View>
            {
              isLoading ? 
                <ActivityIndicator /> 
                :
                <View style={styles.gaugeRow}>
                  <Gauge currentLevel={jctData.OT1Level} tankLevel={jctData.OTHight} tankName="Tank #1" />
                  <Gauge currentLevel={jctData.OT2Level} tankLevel={jctData.OTHight} tankName="Tank #2" />
                </View>
            }
        </View>

    </>
  );
};

const styles = StyleSheet.create({
  gaugeRow: {
    flexDirection: 'row',
    marginLeft: 10
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
