import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Detay from './Detay'

class List extends Component{
    state = {data : [], ali : "ali"}
    
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
        return this.state.data.map((responseData, Id) => 
            <Detay key = {Id} data={responseData}/>
        )
    }

    render(){
        console.log('gelen data '  + this.state)
        return(
            <ScrollView style={{ marginTop: 5 }}>
                {this.renderData()}
            </ScrollView>
        )
    }
}


export default List;