import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, 
  TouchableWithoutFeedback, StatusBar} from 'react-native';
import HorizontalWrap from './HorizontalWrap';

export default class Restaurant extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: [],
      continentalRestaurant:[],
      africanRestaurant:[]
    }
    this.navigate = this.navigate.bind(this);
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

  navigate = (name, source) => {
    this.props.navigation.navigate('Details', {name: name, src: source})
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
          <HorizontalWrap restaurant={this.state.restaurant} name="Continental" navigate={this.navigate} />
          <HorizontalWrap restaurant={this.state.restaurant} name="African" navigate={this.navigate} />
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
  }
});