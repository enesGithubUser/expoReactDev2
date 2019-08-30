import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'

import Anasayfa from './src/components/Anasayfa'
import Iplik from './src/components/Iplik/Iplik'
import IplikSatinAl from './src/components/Iplik/IplikSatinAl'
import IplikSat from './src/components/Iplik/IplikSat'
import DokumayaIplikSevk from './src/components/Iplik/DokumayaIplikSevk'
import Dokuma from './src/components/Dokuma'
import Apre from './src/components/Apre'
import Stok from './src/components/Stok'
import Siparis from './src/components/Siparis'
import Urun from './src/components/Urun'
import Rapor from './src/components/Rapor'
import Metin from './src/components/Metin'
import Ayar from './src/components/Ayar'


const AppNavigator = createStackNavigator({
  Anasayfa: {screen : Anasayfa},
  Iplik: {screen : Iplik,
    navigationOptions: () => ({
      headerTitle: 'İplik',
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: 'İplik',
      headerTintColor: 'blue',
      headerStyle: { justifyContent: 'center' }, 
      headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', justifyContent: 'center' }      
    })},
  IplikSatinAl: {screen : IplikSatinAl,
    navigationOptions: () => ({
      headerTitle: 'İplik Satın Al',
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: 'İplik',
      headerTintColor: 'blue',
      headerStyle: { justifyContent: 'center' }, 
      headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', justifyContent: 'center' }      
    })
  },
  IplikSat: {screen : IplikSat,
    navigationOptions: () => ({
      headerTitle: 'İplik Sat',
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: 'İplik',
      headerTintColor: 'blue',
      headerStyle: { justifyContent: 'center' }, 
      headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', justifyContent: 'center' }      
    })
  },
  DokumayaIplikSevk: {screen : DokumayaIplikSevk,
    navigationOptions: () => ({
      headerTitle: 'Dokumaya Iplik Sevk Et',
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: 'İplik',
      headerTintColor: 'blue',
      headerStyle: { justifyContent: 'center' }, 
      headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', justifyContent: 'center' }      
    })
  },
  Dokuma: {screen : Dokuma},
  Apre: {screen : Apre},
  Stok: {screen : Stok},
  Siparis: {screen : Siparis},
  Urun: {screen : Urun},
  Rapor: {screen : Rapor},
  Metin: {screen : Metin},
  Ayar: {screen : Ayar}
},
{
  navigationOptions: {
    headerVisible: false,
  }
 })

export default createAppContainer(AppNavigator)