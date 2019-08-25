import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Iplik extends React.Component {
    render(){
      return (
        <View style={styles.body}>
          <View >
            <ScrollView>
                <TouchableOpacity onPress={ ()=> { this.props.navigation.push('IplikSatinAl')}}>
                  <View style = {styles.navBar}>
                    <Image source = {require('../../images/iplik.png')} style={styles.bodyItem}  />
                    <Text style={{fontWeight:"bold",textAlign:'right', flexWrap: 'wrap'}}>
                    İplik Satın Al</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity >
                  <View style = {styles.navBar}>
                    <Image source = {require('../../images/iplik.png')} style={styles.bodyItem}  />
                    <Text style={{fontWeight:"bold",textAlign:'right', flexWrap: 'wrap'}}>
                    Dokumaya İplik Sevk Et</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity >
                  <View style = {styles.navBar}>
                    <Image source = {require('../../images/iplik.png')} style={styles.bodyItem}  />
                    <Text style={{fontWeight:"bold",textAlign:'right', flexWrap: 'wrap'}}>
                    İplik Sat</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity >
                  <View style = {styles.navBar}>
                    <Image source = {require('../../images/iplik.png')} style={styles.bodyItem}  />
                    <Text style={{fontWeight:"bold",textAlign:'right', flexWrap: 'wrap'}}>
                    İplik Stokları"</Text>
                  </View>
                </TouchableOpacity>
            </ScrollView>
          </View>                  
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navBar: {
    height: 80,
    marginTop: 24,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoItem: {
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  rightNow: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 25,
  },
  body: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'flex-start',
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
  bodyTitleRightNow: {
    fontSize: 18,
    color: '#3c3c3c',
    paddingTop: 1,
    flexDirection: 'column'
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
})


export default Iplik