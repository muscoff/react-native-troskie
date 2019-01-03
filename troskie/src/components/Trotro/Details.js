import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image, TouchableHighlight} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import { ScrollView } from 'react-native-gesture-handler';
import { Divider, Icon } from 'react-native-elements';

export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.navigation.getParam('name', 'No Name'),
            src: this.props.navigation.getParam('src', 'No Source'),
        }
    }

  render() {
    return (
        <ScrollView style={{backgroundColor: '#2a2e43'}}>
        {/* <View style={styles.container}>
            <Text>{this.state.name}</Text>
            <Image source={this.state.src} />
        </View> */}
        <View style={{width:'100%', height: 400, backgroundColor: 'blue'}}>
            <Image source={this.state.src} style={{width: '100%', height: 400}} />
            <View style={{width: '100%', height: 60,position:'absolute', bottom: 20, justifyContent: 'center'}}>
                <Text style={{color: '#fff', fontSize: 24, textAlign: 'center'}}>{this.state.name}</Text>
            </View>
        </View>

        <View style={{marginTop: 30, marginBottom: 25}}>
            <Text style={{fontSize: 20, padding: 5, marginBottom: 15, color:'#fff'}}>Description</Text>
            <Text style={{paddingLeft: 20, color:'#fff'}}>We are a chinese restaurant but we also serve Ghanaian dishes</Text>
        </View>

        <Divider style={{backgroundColor: 'grey'}} />

        <View style={{flexDirection: 'row'}}>
            <View style={{paddingLeft: 15, marginTop: 25, marginBottom:25}}>
                <Icon name="contact-phone" size={24} color="#fff"/>
            </View>
            
            <View style={{paddingLeft: 15, marginTop: 25, marginBottom:25}}>
            <Text style={{color: '#fff', fontSize: 20, paddingLeft: 20}}>+233247899003</Text>
            </View>
        </View>

        <Divider style={{backgroundColor: 'grey'}} />

        <TouchableHighlight style={{marginTop: 65, alignSelf: 'center', alignItems: 'center', width: '80%',
    height: 50, borderRadius: 10, backgroundColor: '#3acce1', justifyContent: 'center',
    marginBottom: 25, padding: 10}}
    onPress={()=>this.props.navigation.navigate('DetailResult', {destination: this.state.name})}>
            <Text style={{color: '#fff'}}>GO THERE</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#FBB41A',
  }
});