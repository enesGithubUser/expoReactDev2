import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNPicker from "rn-modal-picker";

class Siparis extends React.Component {
    _selectedValue(index, name) {
        this.setState({ selectedText: name });
      }
  
    render(){

      this.state = {
            dataSource: [
              {
                id: 1,
                name: "Afghanistan"
              },
              {
                id: 2,
                name: "Bahrain"
              },
              {
                id: 3,
                name: "Canada"
              },
              {
                id: 4,
                name: "Denmark"
              },
              {
                id: 5,
                name: "Egypt"
              },
              {
                id: 6,
                name: "France"
              },
              {
                id: 7,
                name: "Greece"
              },
              {
                id: 8,
                name: "Hong Kong"
              },
              {
                id: 9,
                name: "India"
              },
              {
                id: 10,
                name: "Japan"
              },
              {
                id: 11,
                name: "Kenya"
              },
              {
                id: 12,
                name: "Liberia"
              }
            ],
            placeHolderText: "Firma Sec",
            selectedText: ""
          };

      return (
        <View style={styles.container}> 

                <View style={styles.body}>
                  <View >
                    <ScrollView>
                        <TouchableOpacity >
                          <View style = {styles.navBar}>
                            
                            <Text style={{fontWeight:"bold",textAlign:'right'}}>İplik Satın Al</Text>
                            <RNPicker
                              dataSource={this.state.dataSource}
                              dummyDataSource={this.state.dataSource}
                              defaultValue={false}
                              pickerTitle={"Country Picker"}
                              showSearchBar={true}
                              disablePicker={false}
                              changeAnimation={"none"}
                              searchBarPlaceHolder={"Search....."}
                              showPickerTitle={true}
                              searchBarContainerStyle={this.props.searchBarContainerStyle}
                              pickerStyle={styles.pickerStyle}
                              selectedLabel={this.state.selectedText}
                              placeHolderLabel={this.state.placeHolderText}
                              selectLabelTextStyle={styles.selectLabelTextStyle}
                              placeHolderTextStyle={styles.placeHolderTextStyle}
                              dropDownImageStyle={styles.dropDownImageStyle}
                              selectedValue={(index, name) => this._selectedValue(index, name)}
                            />
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                          <View style = {styles.navBar}>
                            <Image source = {require('../images/iplik.png')} style={styles.bodyItem}  />
                            <Text style={{fontWeight:"bold",textAlign:'right'}}>İplik Satın Al</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                          <View style = {styles.navBar}>
                            <Image source = {require('../images/iplik.png')} style={styles.bodyItem}  />
                            <Text style={{fontWeight:"bold",textAlign:'right'}}>İplik Satın Al</Text>
                          </View>
                        </TouchableOpacity>
                        
                    </ScrollView>
                  </View>                  
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
    height: 60,
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
    width: "99%",
    padding: 10,
    flexDirection: "row"
  },
  placeHolderTextStyle: {
    color: "#D3D3D3",
    padding: 10,
    textAlign: "left",
    width: "99%",
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


export default Siparis