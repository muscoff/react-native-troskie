/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight,
StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';

//Components
import MySwiper from './src/components/Trotro/MySwiper';
import Homescreen from './src/components/Trotro/Homescreen';
import ShowResult from './src/components/Trotro/ShowResult';
import Details from './src/components/Trotro/Details';
import DetailResult from './src/components/Trotro/DetailResult';
import Support from './src/components/Trotro/Support';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#FBB41A" />
        <Animatable.View animation="fadeInDown" style={styles.image}>
          <Image source={require('./src/components/Images/free.png')} />
        </Animatable.View>
        <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite" style={styles.btn}>
          <TouchableHighlight 
          onPress={()=>this.props.navigation.navigate('Intro')}
           style={{justifyContent:'center', height: 50}}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableHighlight>
        </Animatable.View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      header: null
    }
  },
  Intro: {
    screen: MySwiper,
    navigationOptions: {
      header: null
    }
  },
  Homescreen: {
    screen: Homescreen,
    navigationOptions: {
      header: null
    }
  },
  ShowResult: {
    screen: ShowResult,
    navigationOptions: {
      //header: null
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: null
    }
  },
  DetailResult: {
    screen: DetailResult,
    navigationOptions: {
      header: null
    }
  },
  Support: {
    screen: Support,
    navigationOptions: {
      title: 'Support'
    }
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBB41A',
  },
  image:{
    marginTop: "30%"
  },
  btn:{
    width: "90%",
    height: 50,
    padding: 20,
    backgroundColor: '#B32CC1',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: "60%"
  },
  btnText:{
    fontSize: 15,
    color: '#fff',
    textAlign: 'center'
  }
});