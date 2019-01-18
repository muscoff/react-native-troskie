import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';

export default class MyPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      //station: [],
      mydestination: '',
      mystation: ''
    }
    //this.navigate = this.navigate.bind(this);
  }

  render() {
    return (
        <View style={{flex:1}}>
        <Text style={{padding : 3}}>{this.props.name}</Text>
          <View style={{width: '100%', height: 50, alignItems: 'center', marginTop: 5}}>
          <Picker mode="dropdown" style={{width: '90%', backgroundColor: 'white'}}
          selectedValue={this.props.mystation}
          onValueChange={(itemValue)=>this.props.valueChange(itemValue)}
          >
            <Picker.Item label={this.props.labelName} value="" />
            {this.props.station.map((item)=>{
              return(
                <Picker.Item key={item.station} label={item.station} value={item.station} />
              )
            })}
          </Picker>
          </View>
      </View>
    );
  }
}


    