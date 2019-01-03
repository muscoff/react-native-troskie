import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, 
    ScrollView, FlatList, StatusBar, TextInput } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
//import { TextInput } from 'react-native-gesture-handler';

export default class DetailResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      station:[],
      destination: [],
      mydestination: this.props.navigation.getParam('destination', 'No Name'),
      mystation: '',
      data:[],
      trotro: [],
      error:[]
    }
  }

  componentDidMount(){
    //My API
    //fetch('https://freemvt.000webhostapp.com/stationApi.php').
    //then(res => res.json()).then(res=>{this.setState({data: res})}).catch(error=>console.log(error));
    //End of My API

    //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then((data)=>{()=>
  //   this.setState({data: data}).catch((error)=>{console.log(error)});
  // });
    this.setState({
      station:[
        {station: 'Madina', color:'#2caac1'},
        {station: 'Lapaz', color:'#1a8908'},
        {station: '37 Station', color:'#da710a'},
        {station: 'Accra-Tema Station', color:'#1822ef'},
        {station: 'Kwame Nkrumah Circle Station', color:'#FBB41A'},
        {station: 'Kaneshie', color:'#313355'},
        {station: 'Achimota', color:'#9d59c1'},
        {station: 'Accra Mall', color:'#270937'},
        {station: 'Shangrila', color:'#f88a75'},
      ],
    });
  }

  onChangeText(e){
      this.setState({mydestination: e});
  }

  valueChange(sta, des){
    this.setState({mystation: sta});
    if(des==''&& sta=='' || sta==''&&des!=='' || sta!=='' && des==''){
        return false;
    }else{
    //My API
    var formData = new FormData();
    formData.append('station',sta);
    formData.append('destination', des);
    fetch('https://freemvt.000webhostapp.com/postRequestApi.php',{
      method: 'POST',
      headers:{
        //Accept: 'application/json',
        //'Content-Type': 'application/json',
      },
      //body: JSON.stringify({station: sta, destination: des}),
      body: formData,
    }).
    then(res => res.json()).
    then(res=>{
      let details = [];
      for(var i in res){
        details.push({mydescription: res[i]})
      }
      this.setState({data: details})
    });
    //End of My API

        // this.props.navigation.navigate('ShowResult',{start: sta, stop: des});
        // this.setState({mydestination: ''});

        // if(sta=='Madina' && des=='Koffee Lounge'){
        // this.setState({
        //     trotro: [
        //         {time: 'Accra', description: 'Tema- Station', lineColor: 'red'},
        //         {time: 'Chorkor', description: 'Police Station', lineColor: 'yellow'}
        //     ]
        // });
        // }

        // if(sta=='Lapaz' && des=='Koffee Lounge'){
        //     this.setState({
        //         trotro: [
        //             {time: 'Tema', description: 'Tema- Station', lineColor: 'red'},
        //             {time: 'London', description: 'Police Station', lineColor: 'yellow'}
        //         ]
        //     });
        //     }
    }
}

  renderScene({item}){
    return (
      // <ListItem 
      // title={item.station}
      // leftIcon={{name: 'tram', color: item.color}}/>
      <ListItem 
      title={item.station}
      leftIcon={{name: 'tram', color: item.color}}/>
      
    )
  }
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar backgroundColor="#FBB41A" />
      <View style={styles.yellow}>
      <View style={{flex:1}}>
      <Text style={{padding : 3}}>Starting Station</Text>
        <View style={{width: '100%', height: 50, alignItems: 'center', marginTop: 5}}>
        <Picker mode="dropdown" style={{width: '90%', backgroundColor: 'white'}}
        selectedValue={this.state.mystation}
        onValueChange={(itemValue)=>this.valueChange(itemValue, this.state.mydestination)}
        >
          <Picker.Item label="Select A Starting Station" value="" />
          {this.state.station.map((item)=>{
            return(
              <Picker.Item key={item.station} label={item.station} value={item.station} />
            )
          })}
        </Picker>
        </View>
      </View>

      <View style={{flex: 1}}>
      <Text style={{padding : 3}}>Destination</Text>
        <View style={{width: '100%', height: 50, alignItems: 'center', marginTop: 5}}>
          <TextInput onChangeText={this.onChangeText.bind(this)} value={this.state.mydestination} 
          style={{width: '90%', backgroundColor: '#fff'}}
          />
        </View>
      </View>
      
      </View>
        <Text style={{color: 'red', fontSize: 20, padding: 10}}>SEARCH RESULTS</Text>

        <ScrollView>
          {this.state.data.map((item)=>{
              return(
                  <View key={item.mydescription}>
                      <Text>{item.mydescription}</Text>
                  </View>
              )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    yellow:{
        width: '100%',
        height: 180,
        backgroundColor: '#FBB41A',
    }
});
