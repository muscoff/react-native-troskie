import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image, TouchableHighlight} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import { ScrollView } from 'react-native-gesture-handler';
import { List, ListItem, Icon } from 'react-native-elements';
import Timeline from 'react-native-timeline-listview';

export default class ShowResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            start: this.props.navigation.getParam('start', 'No Record'),
            stop: this.props.navigation.getParam('stop', 'No Record'),
            trotro:[]
        }
    }

    componentDidMount(){
      this.setState({
        trotro:[
          {time: 'Accra', description: 'Tema- Station', lineColor: 'red'},
          {time: 'Chorkor', description: 'Police Station', lineColor: 'yellow'},
          {time: 'Chorkor', description: 'Police Station', lineColor: 'green'},
          {time: 'Accra', description: 'Tema- Station', lineColor: 'blue'},
          // {beg: 'Accra', end: 'Tema- Station', walk: ''},
          // {beg: 'Chorkor', end: 'Police Station', walk:'4min toward me'}
        ]
      });
    }
  render() {
    return (
      <View style={styles.container}>

      <View style={{alignItems: 'center'}}>
      <View style={styles.yellow}>
        <List>
            <ListItem
              key={this.state.start}
              title="From"
              titleStyle={{fontSize: 8}}
              subtitle={this.state.start}
              rightIcon={{name: 'tram'}}
                />
            <ListItem
              key={this.state.stop}
              title="From"
              titleStyle={{fontSize: 8}}
              subtitle={this.state.stop}
              rightIcon={{name: 'tram'}}
                />
        </List>
      </View>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.car}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Icon name="tram" color="#fff" />
                <Text style={styles.carText}>Mussy</Text>
                <Icon name="arrow-forward" color="#fff" />
            </View>
          </View>
      </View>

      <View style={{marginTop: 20}}>
      <ScrollView>
        <Timeline data={this.state.trotro} />
      </ScrollView>
      {/* <View style={{width: "100%", backgroundColor: 'blue'}}>
      <Text style={{textAlign:'center'}}>{this.state.start}</Text>
        {this.state.trotro.map((item)=>{
          return(
            <View style={{flexDirection: 'row'}} key={item.beg}>
            <View style={{width: "50%",height: 60, flexDirection: 'row', padding: 20}}>
            <Icon name="tram"/>
            <Text>{item.beg}</Text>
            <Icon name="arrow-forward"/>
            </View>
            <View style={{width: "50%" , height: 60, justifyContent:'center'}}>
                <Text>{item.end}</Text>
            </View>
        </View>
          )
        })}
      <Text style={{textAlign:'center'}}>{this.state.stop}</Text>
      </View> */}
      </View>
        {/* <Text>Show Results</Text> */}
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
  yellow:{
      //height: 200,
      width: "80%",
      marginBottom: 20
      //backgroundColor: 'green',
      //flexDirection: 'row'
  },
  car:{
    flexDirection: 'row',
    backgroundColor: '#2a2e43',
    width: "90%",
    height: 60,
    borderRadius: 20,
    padding: 20
  },
  carText:{
      backgroundColor: 'green',
      fontSize: 14,
      color: '#fff'
  }
});