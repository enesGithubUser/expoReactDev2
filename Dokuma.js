import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export class Dokuma extends React.Component {
    
    render(){
        return (
        <View style={styles.body}>
            <View style={styles.bodyBar}>
              <TouchableOpacity >
                <Image source = {require('./src/images/iplik.png')} style={styles.bodyItem}  />
                <Text style={styles.bodyTitle}>İPLİK SATIN AL</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Image source = {require('./src/images/dokuma.png')} style={styles.bodyItem} />
                <Text style={styles.bodyTitle}>DOKUMAYA İPLİK SEVK ET</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source = {require('./src/images/apre.png')} style={styles.bodyItem}   />
                <Text style={styles.bodyTitle}>İPLİK SAT</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source = {require('./src/images/apre.png')} style={styles.bodyItem}   />
                <Text style={styles.bodyTitle}>İPLİK STOKLARI</Text>
              </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    navBar:{
        height: 60,
        marginTop: 24,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoItem: {
       width:150, 
       height:50,
       borderRadius: 20
    },
    rightNow: {
        flexDirection: 'row'
    },
    navItem: {
        marginLeft: 25
    },
    body: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center'
    },
    bodyBar: {
        marginTop: 20,
        height: 130,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bodyItem: {
        borderRadius: 20,
        width:75, 
        height:75
    },
    bodyTitle: {
      fontSize: 18,
      color: '#3c3c3c',
      paddingTop: 1
    },
    tabTitle: {
        fontSize: 11,
        color: '#3c3c3c',
        paddingTop: 4
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBar: {
        backgroundColor : 'white',
        height: 60,
        borderWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
  
  });

export default Iplik;