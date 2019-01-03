import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, ScrollView, FlatList, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';
import { ListItem, Icon } from 'react-native-elements';

import Restaurant from './Restaurant';
import Highlights from './Highlights';
import Art from './Art';
import Shopping from './Shopping';
import More from './More';

class Homescreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      station:[],
      destination: [],
      mydestination: '',
      mystation: '',
      data:[],
      me: 'hey'
    }
  }

  componentDidMount(){
    //My API
    //fetch('https://freemvt.000webhostapp.com/stationApi.php').
    //then(res => res.json()).then(res=>{this.setState({data: res})}).catch(error=>console.log(error));
    //End of My API

    //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then((data)=>{()=>
  //   this.setState({data: data}).catch((error)=>{console.log(error)});
  // });
    this.setState({
      station:[
        {station: 'Madina', color:'#2caac1'},
        {station: 'Lapaz', color:'#1a8908'},
        {station: '37 Station', color:'#da710a'},
        {station: 'Accra-Tema Station', color:'#1822ef'},
        {station: 'Kwame Nkrumah Circle Station', color:'#FBB41A'},
        {station: 'Kaneshie', color:'#313355'},
        {station: 'Achimota', color:'#9d59c1'},
        {station: 'Accra Mall', color:'#270937'},
        {station: 'Shangrila', color:'#f88a75'},
      ],
      destination:[
        {destination: 'Dr Kwame Nkrumah Museum'},
        {destination: 'James Town LightHouse'},
        {destination: 'National Museum'},
        {destination: 'National Theatre'},
        {destination: 'University of Ghana'},
        {destination: 'The Du Bois Memorial Centre of African Culture'},
        {destination: 'Independence Square And Arch'},
        {destination: 'Usser Fort and Museum'},
        {destination: 'Osu Castle'},
        {destination: 'Legon Botanical Garden'},
        {destination: 'Crystal Park'},
        {destination: 'Memory Lane Park'}
    ]
    });
  }

  valueChange(sta, des){
    this.setState({mystation: sta});
    if(des==''&& sta=='' || sta==''&&des!=='' || sta!=='' && des==''){
        return false;
    }else{
        this.props.navigation.navigate('ShowResult',{start: sta, stop: des});
        this.setState({mydestination: ''});
    }
}

  valueChanged(des, sta){
    this.setState({mydestination: des});
    if(sta==''&& des=='' || sta==''&&des!=='' || sta!=='' && des==''){
        return false;
    }else{
        this.props.navigation.navigate('ShowResult',{start: sta, stop: des});
        this.setState({mydestination: ''});
    }
}

  renderScene({item}){
    return (
      // <ListItem 
      // title={item.station}
      // leftIcon={{name: 'tram', color: item.color}}/>
      <ListItem 
      title={item.station}
      leftIcon={{name: 'tram', color: item.color}}/>
      
    )
  }
  render() {
    console.log(this.state.data);
    return (
      <View style={{flex:1}}>
      <StatusBar backgroundColor="#FBB41A" />
      <View style={styles.yellow}>
      <View style={{flex:1}}>
      <Text style={{padding : 3}}>Starting Station</Text>
        <View style={{width: '100%', height: 50, alignItems: 'center', marginTop: 5}}>
        <Picker mode="dropdown" style={{width: '90%', backgroundColor: 'white'}}
        selectedValue={this.state.mystation}
        onValueChange={(itemValue)=>this.valueChange(itemValue, this.state.mydestination)}
        >
          <Picker.Item label="Select A Starting Station" value="" />
          {this.state.station.map((item)=>{
            return(
              <Picker.Item key={item.station} label={item.station} value={item.station} />
            )
          })}
        </Picker>
        </View>
      </View>

      <View style={{flex: 1}}>
      <Text style={{padding : 3}}>Destination</Text>
        <View style={{width: '100%', height: 50, alignItems: 'center', marginTop: 5}}>
        <Picker mode="dropdown" style={{width: '90%', backgroundColor: 'white'}}
        onValueChange={(itemValue)=>this.valueChanged(itemValue, this.state.mystation)}
        selectedValue={this.state.mydestination}>
          <Picker.Item label="Select A Destination" value="" />
          {this.state.destination.map((item)=>{
            return(
              <Picker.Item key={item.destination} label={item.destination} value={item.destination} />
            )
          })}
        </Picker>
        </View>
      </View>
      {/* <View style={{flex: 1, backgroundColor: 'blue'}}></View> */}
      </View>
        <Text style={{color: 'red', fontSize: 20, padding: 10}}>MAIN STATION</Text>

        <ScrollView>
          <FlatList
           data={this.state.station}
          //data={this.state.data}
          renderItem={this.renderScene.bind(this)} 
          keyExtractor={item => item.station}
          />
        </ScrollView>
      </View>
    );
  }
}

// const AppNav = createBottomTabNavigator({
const AppNav = createMaterialTopTabNavigator({
  Homescreen:{
    screen: Homescreen,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor})=>(
        <Icon name="home" color={tintColor} />
    )
    }
  },
  Restaurant:{
    screen: Restaurant,
    navigationOptions:{
      tabBarLabel: 'Restaurant',
      tabBarIcon: ({tintColor})=>(
        <Icon name="restaurant" color={tintColor} />
    )
    }
  },
  Highlights:{
    screen: Highlights,
    navigationOptions:{
      tabBarLabel: 'Accra-Highlight',
      tabBarIcon: ({tintColor})=>(
        <Icon name="thumb-up" color={tintColor} />
    )
    }
  },
  Art:{
    screen: Art,
    navigationOptions:{
      tabBarLabel: 'Arts',
      tabBarIcon: ({tintColor})=>(
        <Icon name="flight-takeoff" color={tintColor} />
    )
    }
  },
  Shopping:{
    screen: Shopping,
    navigationOptions:{
      tabBarLabel: 'Shopping',
      tabBarIcon: ({tintColor})=>(
        <Icon name="shopping-cart" color={tintColor} />
    )
    }
  },
  More:{
    screen: More,
    navigationOptions:{
      tabBarLabel: 'More',
      tabBarIcon: ({tintColor})=>(
        <Icon name="settings" color={tintColor} />
    )
    }
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions:{
    activeTintColor: "#FBB41A",
    inactiveTintColor: 'grey',
    indicatorStyle:{
      height: 0
    },
    style:{
      backgroundColor: '#f2f2f2'
    },
    showIcon: true,
    showLabel: false
  }
});

export default createAppContainer(AppNav);

const styles = StyleSheet.create({
    yellow:{
        width: '100%',
        height: 180,
        backgroundColor: '#FBB41A',
    }
});
