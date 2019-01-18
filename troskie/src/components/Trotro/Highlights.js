import React, {Component} from 'react';
import {ScrollView,View,} from 'react-native';;
import HorizontalFlowWrap  from './HorizontalFlowWrap';
import Header from './Header';

export default class Highlights extends Component {
    constructor(props){
        super(props);
        this.state = {
          highlight: [],
          shop:[]
        }
        this.navigate = this.navigate.bind(this);
      }
      componentDidMount(){
        this.setState({
          highlight:[
            {name:'Legon Botanical Garden', src:require('../Images/botanical.jpg')},
            {name:'Brazil House', src:require('../Images/brazil.jpg')},
            {name:'Crystal Park', src:require('../Images/crystal.jpg')},
            {name:'James Town', src:require('../Images/botanical.jpg')},
            {name:'KuKun', src:require('../Images/brazil.jpg')},
            {name:'National Theatre', src:require('../Images/botanical.jpg')}
          ]
        });
        //this.highlightApi();
      }

      navigate=(name, source)=>{
        this.props.navigation.navigate('Details', {name:name, src: source});
      }

      highlightApi(){
        //My API
        //fetch('https://freemvt.000webhostapp.com/highlightApi.php').
        //then(res => res.json()).then(res=>{this.setState({highlight: res})}).catch(error=>console.log(error));
        //End of My API
      }

  render() {
    console.log(this.state.shop);
    return (
        <View style={{flex: 1}}>
            <Header name="Accra Highlights"/>
            <HorizontalFlowWrap highlight={this.state.highlight} navigate={this.navigate} />
        </View>
    );
  }
}