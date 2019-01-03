import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image, 
    TouchableWithoutFeedback, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import { ScrollView } from 'react-native-gesture-handler';
import { Divider, Icon } from 'react-native-elements';

export default class Support extends Component {
  render() {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#2a2e43" />
        <Text style={{fontSize: 15, textAlign: 'center'}}>The management of Troskie would be glad to be at your service 24/7</Text>
        <Text style={{fontSize: 15, textAlign: 'center'}}>If you ever need any help, please contact any of the managers
            on Whatsapp for immediate assistance
        </Text>
        <View style={{marginBottom: 10, marginTop: 20}}>
            <Text style={{fontSize: 15, paddingLeft: 20}}>Mustapha</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{paddingLeft: 20}}><Icon name="contact-phone" size={25} /></View>
            <Text style={{fontSize: 20, color: 'green', paddingLeft: 20}}>+233247899003</Text>
            </View>
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 15, paddingLeft: 20}}>Lawrence</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{paddingLeft: 20}}><Icon name="contact-phone" size={25} /></View>
            <Text style={{fontSize: 20, color: 'green', paddingLeft: 20}}>+233270769192</Text>
            </View>
        </View>
        <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 15, paddingLeft: 20}}>Kwame</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{paddingLeft: 20}}><Icon name="contact-phone" size={25} /></View>
            <Text style={{fontSize: 20, color: 'green', paddingLeft: 20}}>+233271721996</Text>
            </View>
        </View>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#FBB41A',
  },
  topcontain:{
    marginBottom: 20, 
    marginTop: 10, 
    borderBottomColor: 'grey', 
    borderBottomWidth: 2
  },
  contain:{
    width: '100%', 
    height: 50, 
    borderBottomWidth:0.5, 
    borderBottomColor: 'grey',
    justifyContent: 'center'
  },
  text:{
    fontSize: 20, 
    fontWeight: '300', 
    color: '#2a2e43', 
    textAlign:'center', 
    padding: 5
  }
});