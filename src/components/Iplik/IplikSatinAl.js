import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPicker from "rn-modal-picker";
import moment from 'moment'
import axios from 'axios'

class IplikSatinAl extends React.Component 
{
    constructor(props) {
    super(props);
    this.state = {
      firmalar: [],
      firmaPlaceHolderText: "Firma Seç",
      firmaSelectedText: "",
      iplikNo: [],
      iplikNoPlaceHolderText: "İplik Numarası Sec",
      iplikNoSelectedText: "",
      iplikCinsi: [],
      iplikCinsiPlaceHolderText: "İplik Cinsini Sec",
      iplikCinsiSelectedText: "",
      iplikRengi: [],
      iplikRengiPlaceHolderText: "İplik Rengini Sec",
      iplikRengiSelectedText: "",
      dataSource: [],
      selectedText: ""
    }
  }

    componentDidMount(){
      console.log('componentDidMount')
      axios.get('http://demo2733612.mockable.io/firmalar')
          .then(response =>{
          const datas = response.data

          this.setState({ firmalar : datas }, () => {
              console.log(this.state.firmalar, 'data');
            }); 
      }) 

      axios.get('http://demo2733612.mockable.io/iplikNo')
          .then(response =>{
          const datas = response.data

          this.setState({ iplikNo : datas }, () => {
              console.log(this.state.iplikNo, 'data');
            }); 
      }) 

      axios.get('http://demo2733612.mockable.io/iplikCinsi')
          .then(response =>{
          const datas = response.data

          this.setState({ iplikCinsi : datas }, () => {
              console.log(this.state.iplikCinsi, 'data');
            }); 
      }) 

      

      axios.get('http://demo2733612.mockable.io/iplikRengi')
          .then(response =>{
          const datas = response.data

          this.setState({ iplikRengi : datas }, () => {
              console.log(this.state.iplikRengi, 'data');
            }); 
      }) 
    }
  
 /* 
    componentWillMount(){
      console.log('componentWillMount')
      axios.get('http://demo2733612.mockable.io/firmalar')
          .then(response =>{
          const datas = response.data
          this.setState({ dataSource : datas }, () => {
              console.log(this.state.dataSource, 'data');
            }); 
      }) 
    }
   */ 

     firmaSelectedValue(name) {
        this.setState({ firmaSelectedText: name });
      }
      
      iplikNoSelectedValue(name) {
        this.setState({ iplikNoSelectedText: name });
      }
      
      iplikCinsiSelectedValue(name) {
        this.setState({ iplikCinsiSelectedText: name });
      }
      
      iplikRengiSelectedValue(name) {
        this.setState({ iplikRengiSelectedText: name });
      }
      
    render(){
        return (
                <View style={styles.container}>
                  <ScrollView>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>Tarih Sec</Text>

                      <Text> {this.state.chosenDate} </Text>
                      <TouchableOpacity onPress={this.showPicker} >
                        <Text> Show Picker </Text>
                      </TouchableOpacity>

                    </View>
                    <View style = {styles.navBar}>
                      <RNPicker key = {1}
                              dataSource={this.state.firmalar}
                              dummyDataSource={this.state.firmalar}
                              defaultValue={false}
                              pickerTitle={"Country Picker"}
                              showSearchBar={true}
                              disablePicker={false}
                              changeAnimation={"none"}
                              searchBarPlaceHolder={"Search....."}
                              showPickerTitle={true}
                              searchBarContainerStyle={this.props.searchBarContainerStyle}
                              pickerStyle={styles.pickerStyle}
                              selectedLabel={this.state.firmaSelectedText}
                              placeHolderLabel={this.state.firmaPlaceHolderText}
                              selectLabelTextStyle={styles.selectLabelTextStyle}
                              placeHolderTextStyle={styles.placeHolderTextStyle}
                              dropDownImageStyle={styles.dropDownImageStyle}
                              selectedValue={(index, name) => this.firmaSelectedValue(name)}
                            />
                    </View>
                    <View style = {styles.navBar}>
                    <RNPicker key = {1}
                              dataSource={this.state.iplikNo}
                              dummyDataSource={this.state.iplikNo}
                              defaultValue={false}
                              pickerTitle={"Country Picker"}
                              showSearchBar={true}
                              disablePicker={false}
                              changeAnimation={"none"}
                              searchBarPlaceHolder={"Search....."}
                              showPickerTitle={true}
                              searchBarContainerStyle={this.props.searchBarContainerStyle}
                              pickerStyle={styles.pickerStyle}
                              selectedLabel={this.state.iplikNoSelectedText}
                              placeHolderLabel={this.state.iplikNoPlaceHolderText}
                              selectLabelTextStyle={styles.selectLabelTextStyle}
                              placeHolderTextStyle={styles.placeHolderTextStyle}
                              dropDownImageStyle={styles.dropDownImageStyle}
                              selectedValue={(index, name) => this.iplikNoSelectedValue(name)}
                            />
                    </View>
                    <View style = {styles.navBar}>
                      <RNPicker key = {1}
                                dataSource={this.state.iplikCinsi}
                                dummyDataSource={this.state.iplikCinsi}
                                defaultValue={false}
                                pickerTitle={"Country Picker"}
                                showSearchBar={true}
                                disablePicker={false}
                                changeAnimation={"none"}
                                searchBarPlaceHolder={"Search....."}
                                showPickerTitle={true}
                                searchBarContainerStyle={this.props.searchBarContainerStyle}
                                pickerStyle={styles.pickerStyle}
                                selectedLabel={this.state.iplikCinsiSelectedText}
                                placeHolderLabel={this.state.iplikCinsiPlaceHolderText}
                                selectLabelTextStyle={styles.selectLabelTextStyle}
                                placeHolderTextStyle={styles.placeHolderTextStyle}
                                dropDownImageStyle={styles.dropDownImageStyle}
                                selectedValue={(index, name) => this.iplikCinsiSelectedValue(name)}
                              />
                    </View>
                    <View style = {styles.navBar}>
                      <RNPicker key = {1}
                                  dataSource={this.state.iplikRengi}
                                  dummyDataSource={this.state.iplikRengi}
                                  defaultValue={false}
                                  pickerTitle={"Country Picker"}
                                  showSearchBar={true}
                                  disablePicker={false}
                                  changeAnimation={"none"}
                                  searchBarPlaceHolder={"Search....."}
                                  showPickerTitle={true}
                                  searchBarContainerStyle={this.props.searchBarContainerStyle}
                                  pickerStyle={styles.pickerStyle}
                                  selectedLabel={this.state.iplikRengiSelectedText}
                                  placeHolderLabel={this.state.iplikRengiPlaceHolderText}
                                  selectLabelTextStyle={styles.selectLabelTextStyle}
                                  placeHolderTextStyle={styles.placeHolderTextStyle}
                                  dropDownImageStyle={styles.dropDownImageStyle}
                                  selectedValue={(index, name) => this.iplikRengiSelectedValue(name)}
                                />
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>Kilosu</Text>
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={{fontWeight:"bold",textAlign:'right'}}>Adedi:         </Text>
                      <TextInput style={{height: 40, flex:1 , borderColor: 'gray', borderWidth: 1}} />
                    </View>
                          
                                
                </ScrollView>
              
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
  searchBarContainerStyle: {
    marginBottom: 10,
    flexDirection: "row",
    height: 40,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1
    },
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 10,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10
  },

  selectLabelTextStyle: {
    color: "#000",
    textAlign: "left",
    width: "85%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "left",
    width: "85%",
    flexDirection: "row"
  },
  dropDownImageStyle: {
    marginLeft: 10,
    width: 10,
    height: 10,
    alignSelf: "center"
  },

  pickerStyle: {
    marginLeft: 18,
    elevation:3,
    paddingRight: 25,
    marginRight: 10,
    marginBottom: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 1,
      height: 1
    },
    borderWidth:1,
    shadowRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "#d3d3d3",
    borderRadius: 5,
    flexDirection: "row"
  }
})


export default IplikSatinAl