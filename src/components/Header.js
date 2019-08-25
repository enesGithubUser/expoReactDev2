import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
const {textStyle, viewStyle} = styles;

    return(
    <View style = {viewStyle}>
        <Text style = {textStyle}> {props.headerText}</Text>
    </View>
    );  
}

const styles = {
    textStyle : {
        fontSize : 35
    },
    viewStyle : {
        backgroundColor: '#f8f8f8',
        height:60,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius: 20,
        marginTop : 24,
        shadowOffset : {weight : 0, height : 3 },
        shadowOpacity : 0.5
    }
}

export default Header;