import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, 
  TouchableWithoutFeedback, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Restaurant extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: [],
      continentalRestaurant:[],
      africanRestaurant:[]
    }
  }
  componentDidMount(){
    this.setState({
      restaurant:[
        {name:'Barcelos', src:require('../Images/botanical.jpg')},
        {name:'Koffee Lounge', src:require('../Images/brazil.jpg')},
        {name:'Rhapsody', src:require('../Images/crystal.jpg')},
        {name:'Maachi Dessert', src:require('../Images/botanical.jpg')},
        {name:'Legon Hall', src:require('../Images/brazil.jpg')},
        {name:'Basement', src:require('../Images/botanical.jpg')}
      ]
    });

    // this.africanApi();
    // this.continentalApi();
  }

  africanApi(){
    //My API
    //fetch('https://freemvt.000webhostapp.com/africanApi.php').
    //then(res => res.json()).then(res=>{this.setState({africanRestaurant: res})}).catch(error=>console.log(error));
    //End of My API
  }

  continentalApi(){
    //My API
    //fetch('https://freemvt.000webhostapp.com/continentalApi.php').
    //then(res => res.json()).then(res=>{this.setState({continentalRestaurant: res})}).catch(error=>console.log(error));
    //End of My API
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#2a2e43" />
      <View style={styles.yellow}>
        <Text style={styles.rest}>Restaurant</Text>
      </View>
        <ScrollView>
          <View style={styles.continental}>
          <Text style={{color:'#fff', fontSize: 20, padding: 5}}>Continental</Text>
            <View style={styles.mainContain}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.state.restaurant.map((item)=>{
                  return (
                    <View style={styles.scontain} key={item.name}>
                      <TouchableWithoutFeedback
                      onPress={()=>this.props.navigation.navigate('Details',{name: item.name, src:item.src})}>
                        <Image source={item.src} style={styles.image} />
                      </TouchableWithoutFeedback>
                      <View style={styles.xcontain}>
                        <Text style={styles.text}>{item.name}</Text>
                      </View>
                    </View>
                  )
                })}
              </ScrollView>
            </View>
          </View>

          <View style={styles.continental}>
          <Text style={{color:'#fff', fontSize: 20, padding: 5}}>African</Text>
            <View style={styles.mainContain}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.state.restaurant.map((item)=>{
                  return (
                    <View style={styles.scontain} key={item.name}>
                      <TouchableWithoutFeedback
                      onPress={()=>this.props.navigation.navigate('Details',{name: item.name, src:item.src})}>
                        <Image source={item.src} style={styles.image} />
                      </TouchableWithoutFeedback>
                      <View style={styles.xcontain}>
                        <Text style={styles.text}>{item.name}</Text>
                      </View>
                    </View>
                  )
                })}
              </ScrollView>
            </View>
          </View>
          {/* <View style={styles.contain}>
            {this.state.restaurant.map((item)=>{
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
          </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2e43'
    // justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#FBB41A',
  },
  yellow:{
      width: "100%",
      height: 50,
      backgroundColor: '#2a2e43',
      marginBottom: 20
  },
  rest:{
    fontSize: 24,
    color: 'white',
    padding: 10,
    fontWeight: 'bold'
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
    width:180, 
    height:50, 
    backgroundColor: '#353a50', 
    borderBottomLeftRadius:10, 
    borderBottomRightRadius: 10, 
    // justifyContent: 'center'
  },
  text:{
    paddingLeft: 5, 
    fontSize: 15,
    color:'#fff'
  },
  continental:{
    width: '100%',
    height: 230,
    marginBottom: 30
    //backgroundColor: 'red'
  },
  scontain:{
    width: 180, 
    height: 200, 
    // backgroundColor: 'green', 
    marginLeft: 10, 
    marginRight: 10, 
    borderRadius: 10
  },
  mainContain:{
    // backgroundColor: 'yellow', 
    width: '100%', 
    height: 200
  }
});