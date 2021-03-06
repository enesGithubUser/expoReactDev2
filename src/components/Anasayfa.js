import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Anasayfa extends React.Component{
  render(){
    //const { navigation } = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.bodyBar}>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Iplik')}}>
              <Image
                source={require('../images/iplik.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> İPLİK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Dokuma')}}>
              <Image
                source={require('../images/dokuma.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> DOKUMA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Apre')}}>
              <Image
                source={require('../images/apre.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> APRE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bodyBar}>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Stok')}}>
              <Image
                source={require('../images/stok.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> STOKLAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Siparis')}}>
              <Image
                source={require('../images/siparis.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> SİPARİŞLER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Urun')}}>
              <Image
                source={require('../images/urun.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> ÜRÜNLER</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bodyBar}>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Rapor')}}>
              <Image
                source={require('../images/rapor.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> RAPORLAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Metin')}}>
              <Image
                source={require('../images/metin.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> METIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ ()=> { this.props.navigation.push('Ayar')}}>
              <Image
                source={require('../images/ayar.png')}
                style={styles.bodyItem}
              />
              <Text style={styles.bodyTitle}> AYARLAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={35} />
            <Text style={styles.tabTitle}>Anasayfa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="dashboard" size={35} />
            <Text style={styles.tabTitle}>Raporlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="settings" size={35} />
            <Text style={styles.tabTitle}>Ayarlar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navBar: {
    height: 60,
    marginTop: 24,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoItem: {
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  rightNow: {
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
  },
  bodyBar: {
    marginTop: 20,
    height: 130,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyItem: {
    borderRadius: 20,
    width: 100,
    height: 100,
  },
  bodyTitle: {
    fontSize: 18,
    color: '#3c3c3c',
    paddingTop: 1,
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
