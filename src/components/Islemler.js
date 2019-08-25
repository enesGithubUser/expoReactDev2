import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Islemler extends Component{
    
    state = {data : []}
    componentWillMount(){
        console.log('componentWillMount')
        axios.get('http://demo2733612.mockable.io/islemler')
            .then(response =>{
            debugger
            const datas = response.data

            this.setState({ data : datas }, () => {
                console.log(this.state.data, 'data');
              }); 
        }) 
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    
    renderData(){
        debugger
        return this.state.data.map((responseData, Id) => 
            <Button key = {Id} style = {styles.container} title={responseData.categories}/>
        )
    }

    render(){
        console.log('gelen data '  + this.state)
        return (
        <View style={styles.container}>
            <View style = {styles.navBar}>
                <Image source = {require('../images/logo.png')} style={{width:50, height:50}}  />
                <View style={styles.rightNow}>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name='search' size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name='account-circle' size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.body}>
            </View>

            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='home' size={35}/>
                    <Text style={styles.tabTitle}>Anasayfa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='dashboard' size={35}/>
                    <Text style={styles.tabTitle}>Raporlar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='settings' size={35}/>
                    <Text style={styles.tabTitle}>Ayarlar</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar:{
        height: 60,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightNow: {
        flexDirection: 'row'
    },
    navItem: {
        marginLeft: 25
    },
    body: {
        flex: 1
    },
    tabTitle: {
        fontSize: 11,
        color: '#3c3c3c'
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

export default Islemler;