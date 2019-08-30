import React from 'react'
import { StyleSheet, Text, Button, View, Image, TouchableOpacity, ScrollView, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RNPicker from "rn-modal-picker";
import moment from 'moment'
import axios from 'axios'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import DateTimePicker from "react-native-modal-datetime-picker"


const
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

// custom constants
const constants = {
  BODY_COLOR, TEXT_MUTED,
}

// custom classes
const classes = {
  title: {
    color: 'red',
  }
}

const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes)
const s =  bootstrapStyleSheet.create()
const c =  bootstrapStyleSheet.constants

class IplikSat extends React.Component 
{

    constructor(props) {
    super(props);
    this.state = {
      firmalar: [],
      firmaPlaceHolderText: "Firma Seç",
      firmaSelectedText: "",
      musteriler: [],
      musteriPlaceHolderText: "Müşteri Seç",
      musteriSelectedText: "",
      iplikNo: [],
      iplikNoPlaceHolderText: "İplik Numarası Sec",
      iplikNoSelectedText: "",
      iplikCinsi: [],
      iplikCinsiPlaceHolderText: "İplik Cinsini Sec",
      iplikCinsiSelectedText: "",
      iplikRengi: [],
      iplikRengiPlaceHolderText: "İplik Rengini Sec",
      iplikRengiSelectedText: "",
      tlEuroDolar: [{id: 1,name: "TL"}, {id: 2, name: "EURO"}, {id: 3, name: "DOLAR"}],
      tlEuroDolarPlaceHolderText: "Kur",
      tlEuroDolarSelectedText: "TL",
      dataSource: [],
      selectedText: "",
      isDateTimePickerVisible: false,
      time: new Date(),
		  isOpen: false,
      selectedDate: "",
      selecttedDateText: ""
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

      
      axios.get('http://demo2733612.mockable.io/musteriler')
          .then(response =>{
          const datas = response.data

          this.setState({ musteriler : datas }, () => {
              console.log(this.state.musteriler, 'data');
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

      musteriSelectedValue(name) {
        this.setState({ musteriSelectedText: name });
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
      
      tlEuroDolarSelectedValue(name) {
        this.setState({ tlEuroDolarSelectedText: name });
      }
      
      showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
    
      hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
    
      handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.setState({ selectedDate: date, 
                        selecttedDateText: moment(date).lang("tr").format('DD-MMM-YYYY') });
        this.hideDateTimePicker();
      };
      
      
    render(){
        return (
                <View style={styles.container}>
                  <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style = {styles.navBar}>
                      
                        <Button style={{ color: "#000",
                            textAlign: "left",
                            width: "85%",
                            padding: 10,
                            flexDirection: "row"}} title="Tarih Seç" onPress={this.showDateTimePicker}  />
                        <DateTimePicker
                          isVisible={this.state.isDateTimePickerVisible}
                          onConfirm={this.handleDatePicked}
                          onCancel={this.hideDateTimePicker}
                        />
                        <Text style={[s.text, s.h5, s.textPrimary, s.myXs1, s.myMd3]}>        {this.state.selecttedDateText}     </Text>
                      
                    </View>
                    
                    <View style = {styles.navBar}>
                      <RNPicker key = {1}
                              dataSource={this.state.firmalar}
                              dummyDataSource={this.state.firmalar}
                              defaultValue={false}
                              pickerTitle={"Firmalar"}
                              showSearchBar={true}
                              disablePicker={false}
                              changeAnimation={"slide"}
                              searchBarPlaceHolder={"Arama....."}
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
                              dataSource={this.state.musteriler}
                              dummyDataSource={this.state.musteriler}
                              defaultValue={false}
                              pickerTitle={"Musteriler"}
                              showSearchBar={true}
                              disablePicker={false}
                              changeAnimation={"slide"}
                              searchBarPlaceHolder={"Arama....."}
                              showPickerTitle={true}
                              searchBarContainerStyle={this.props.searchBarContainerStyle}
                              pickerStyle={styles.pickerStyle}
                              selectedLabel={this.state.musteriSelectedText}
                              placeHolderLabel={this.state.musteriPlaceHolderText}
                              selectLabelTextStyle={styles.selectLabelTextStyle}
                              placeHolderTextStyle={styles.placeHolderTextStyle}
                              dropDownImageStyle={styles.dropDownImageStyle}
                              selectedValue={(index, name) => this.musteriSelectedValue(name)}
                            />
                    </View>
                    <View style = {styles.navBar}>
                    <RNPicker key = {1}
                              dataSource={this.state.iplikNo}
                              dummyDataSource={this.state.iplikNo}
                              defaultValue={false}
                              pickerTitle={"İplik No"}
                              showSearchBar={true}
                              disablePicker={false}
                              changeAnimation={"slide"}
                              searchBarPlaceHolder={"Arama....."}
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
                                pickerTitle={"İplik Cinsi"}
                                showSearchBar={true}
                                disablePicker={false}
                                changeAnimation={"slide"}
                                searchBarPlaceHolder={"Arama....."}
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
                                  pickerTitle={"İplik Rengi"}
                                  showSearchBar={true}
                                  disablePicker={false}
                                  changeAnimation={"slide"}
                                  searchBarPlaceHolder={"Arama....."}
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
                      <Text style={[s.text, s.h5, s.textPrimary, s.myXs1, s.myMd3]}>        Kilosu     </Text>
                      <TextInput  
                           style={{height: 40, width: "60%", borderColor: 'black', borderWidth: 1, paddingVertical: 5}}
                                placeholder=""  
                      keyboardType={'numeric'}  
                      />  
                    </View>
                    <View style = {styles.navBar}>
                    <Text style={[s.text, s.h5, s.textPrimary, s.myXs1, s.myMd3]}>        Fiyatı  </Text>
                      <TextInput  
                            style={{height: 40, width: "60%", borderColor: 'black', borderWidth: 1, paddingVertical: 5}}
                                  placeholder=""  
                        keyboardType={'numeric'}  
                        />  
                        
                      <RNPicker key = {1}
                                  dataSource={this.state.tlEuroDolar}
                                  dummyDataSource={this.state.tlEuroDolar}
                                  defaultValue={true}
                                  pickerTitle={"Kur Seçimi"}
                                  disablePicker={false}
                                  changeAnimation={"slide"}
                                  searchBarPlaceHolder={"Arama....."}
                                  showPickerTitle={true}
                                  searchBarContainerStyle={this.props.searchBarContainerStyle}
                                  pickerStyle={styles.pickerStyle}
                                  selectedLabel={this.state.tlEuroDolarSelectedText}
                                  placeHolderLabel={this.state.tlEuroDolarPlaceHolderText}
                                  selectLabelTextStyle={styles.selectLabelTextStyle2}
                                  placeHolderTextStyle={styles.placeHolderTextStyle}
                                  dropDownImageStyle={styles.dropDownImageStyle}
                                  selectedValue={(index, name) => this.tlEuroDolarSelectedValue(name)}
                                />
                    </View>
                    <View style = {styles.navBar}>
                      <Text style={[s.text, s.h5, s.textPrimary, s.myXs1, s.myMd3]}>        Aciklama</Text>
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
    backgroundColor: '#F9FCE6',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20
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

  selectLabelTextStyle2: {
    color: "#000",
    textAlign: "left",
    width: "40%",
    padding: 5,
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


export default IplikSat