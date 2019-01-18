import React, {Component} from 'react';
import {ScrollView,View} from 'react-native';
import HorizontalFlowWrap from './HorizontalFlowWrap';
import Header from './Header';

export default class Arts extends Component {
    constructor(props){
        super(props);
        this.state = {
          arts: []
        }
        this.navigate = this.navigate.bind(this);
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

      navigate=(name, source)=>{
        this.props.navigation.navigate('Details', {name:name, src: source});
      }

      artApi(){
        //My API
        //fetch('https://freemvt.000webhostapp.com/artApi.php').
        //then(res => res.json()).then(res=>{this.setState({highlight: res})}).catch(error=>console.log(error));
        //End of My API
      }

  render() {
    return (
        <View style={{flex: 1}}>
        <Header name="Arts And Culture"/>
          <HorizontalFlowWrap highlight={this.state.arts} navigate={this.navigate} />
        </View>
    );
  }
}
