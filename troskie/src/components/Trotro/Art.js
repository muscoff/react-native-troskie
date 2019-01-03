import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image, 
    TouchableWithoutFeedback, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

export default class Arts extends Component {
    constructor(props){
        super(props);
        this.state = {
          arts: []
        }
      }
      componentDidMount(){
        this.setState({
          arts:[
            {name:'Legon Botanical Garden', src:require('../Images/botanical.jpg')},
            {name:'Brazil House', src:require('../Images/brazil.jpg')},
            {name:'Crystal Park', src:require('../Images/crystal.jpg')},
            {name:'James Town', src:require('../Images/botanical.jpg')},
            {name:'KuKun', src:require('../Images/brazil.jpg')},
            {name:'National Theatre', src:require('../Images/botanical.jpg')}
          ]
        });

        //this.artApi();
      }

      artApi(){
        //My API
        //fetch('https://freemvt.000webhostapp.com/artApi.php').
        //then(res => res.json()).then(res=>{this.setState({highlight: res})}).catch(error=>console.log(error));
        //End of My API
      }

  render() {
    return (
        // <ScrollView>
        //     <View style={styles.contain}>
        //         {/* <View style={styles.box}></View> */}
        //         <View style={{backgroundColor: 'blue', marginLeft: "5%", marginRight: "5%", width: "40%", height: 50}}></View>
        //         <View style={{backgroundColor: 'yellow', marginLeft: "5%", marginRight: "5%", width: "40%", height: 50}}></View>
        //         <View style={{backgroundColor: 'red', marginLeft: "5%", marginRight: "5%", width: "40%", height: 50}}></View>
        //     </View>
        // </ScrollView>
        <View style={{flex: 1}}>
        <StatusBar backgroundColor="#2a2e43" />
            <View style={{marginBottom: 20, marginTop: 10}}>
                <Text style={{fontSize: 30, fontWeight: '300', color: '#2a2e43', textAlign:'center'}}>Arts And Culture</Text>
            </View>
        <ScrollView style={{marginTop:5}} >
          <View style={styles.contain}>
            {this.state.arts.map((item)=>{
              return (
                <View style={styles.smallContain} key={item.name.toString()}>
                  <View>
                  <TouchableWithoutFeedback
                onPress={()=>this.props.navigation.navigate('Details',{name: item.name, src:item.src})}>
                    <Image source={item.src} style={styles.image} />
                    </TouchableWithoutFeedback>
                    <View style={styles.xcontain}>
                      <Text style={styles.text}>{item.name}</Text>
                    </View>
                  </View>
                </View>
              )
            })} 
          </View>
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
  contain:{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    //   justifyContent: 'space-around'
  },
  box:{
      width: "50%",
      height: 50,
      backgroundColor: 'green'
  },
  image:{
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  contain:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  smallContain:{
    width: "48%", 
    marginLeft: "1%", 
    marginRight: "1%", 
    marginBottom: 30, 
    height: 200, 
    backgroundColor: 'red', 
    borderRadius: 10
  },
  xcontain:{
    position: 'absolute', 
    bottom: 0, 
    width:'100%', 
    height:50, 
    backgroundColor: '#353a50', 
    borderBottomLeftRadius:10, 
    borderBottomRightRadius: 10, 
    justifyContent: 'center'
  },
  text:{
    paddingLeft: 10, 
    fontSize: 15,
    color:'#fff'
  }
});