import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image, 
    TouchableWithoutFeedback, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

export default class More extends Component {
    constructor(props){
        super(props);
        this.state = {
          more: []
        }
      }
      componentDidMount(){
        this.setState({
          more:[
            {name:'Accra Highlights', nav: 'Highlights'},
            {name:'Restaurants', nav: 'Restaurant'},
            {name:'Arts & Culture', nav: 'Art'},
            {name:'Shopping', nav: 'Shopping'},
            {name:'Support', nav:'Support'}
          ]
        });

        //this.shoppingApi();
      }

      shoppingApi(){
        //My API
        //fetch('https://freemvt.000webhostapp.com/shoppingApi.php').
        //then(res => res.json()).then(res=>{this.setState({shopping: res})}).catch(error=>console.log(error));
        //End of My API
      }

  render() {
    return (
        <View style={{flex: 1}}>
        <StatusBar backgroundColor="#2a2e43" />
            <View style={styles.topcontain}>
                <Text style={styles.text}>Categories</Text>
            </View>
        <ScrollView style={{marginTop:5}} >
          {this.state.more.map((item)=>{
              return (
                <View style={styles.contain} key={item.name}>
                <TouchableWithoutFeedback style={{padding: 30}}
                onPress={()=>this.props.navigation.navigate(item.nav)}>
                <Text style={{paddingLeft: 10}}>{item.name}</Text>
                </TouchableWithoutFeedback>
            </View>
              )
          })}
          
        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
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