import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

export default class MySwiper extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
            <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite">
                <Image source={require('../Images/free.png')}/>
            </Animatable.View>
            <Text style={styles.text}>Freemvmt is a directory of trotro(commercial bus) routes 
                from the various trotro main stations in Accra to 
                Selected destinations in Accra</Text>
        </View>
        <View style={styles.slide2}>
        <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite">
            <Image source={require('../Images/free.png')}/>
        </Animatable.View>
          <Text style={styles.text}>Some of the destinations include tourist sites, 
            restaurants, beaches, museums, etc.</Text>
        </View>
        <View style={styles.slide3}>
        <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite"
        style={{marginTop: "30%", marginBottom: "10%"}}>
            <Image source={require('../Images/free.png')}/>
        </Animatable.View>
          <Text style={styles.text}>We strongly advice you also employ other Map 
            applications or ask the local around once you arrive 
            at the stop closer to your final destination</Text>
            <Animatable.View style={styles.btn} animation="pulse" easing="ease-in-out-back" iterationCount="infinite">
            <TouchableHighlight style={{justifyContent:'center', height: 50}}
            onPress={()=>this.props.navigation.navigate('Homescreen')}>
                <Text style={{fontSize: 20, color:'#fff', textAlign: 'center'}}>Begin</Text>
            </TouchableHighlight>
            </Animatable.View>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#FBB41A',
    // backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#FBB41A',
    // backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#FBB41A',
    // backgroundColor: '#92BBD9',
  },
  text: {
    //color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  btn:{
      width: "90%",
      height: 50,
      backgroundColor: '#B32CC1',
      borderRadius: 10,
      marginTop: "25%",
      justifyContent: 'center',
      padding: 20
  }
});