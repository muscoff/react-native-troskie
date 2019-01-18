import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, Image, 
    TouchableWithoutFeedback, StatusBar} from 'react-native';

export default class HorizontalFlowWrap extends Component {
    constructor(props){
        super(props);
        this.state = {
          highlight: []
        }
      }

  render() {
    return (
        <View style={styles.continental}>
          <Text style={{color:'#fff', fontSize: 20, padding: 5}}>{this.props.name}</Text>
            <View style={styles.mainContain}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.props.restaurant.map((item)=>{
                  return (
                    <View style={styles.scontain} key={item.name}>
                      <TouchableWithoutFeedback
                      onPress={()=>this.props.navigate(item.name, item.src)}
                      //onPress={()=>this.props.navigation.navigate('Details',{name: item.name, src:item.src})}
                      >
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
    );
  }
}

const styles = StyleSheet.create({
    image:{
      width: "100%",
      height: 150, //200
      borderRadius: 10,
    },
    xcontain:{
      position: 'absolute', 
      bottom: 0, 
      width:140, //180
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
      height: 200, //230
      marginBottom: 30
      //backgroundColor: 'red'
    },
    scontain:{
      width: 140, //180 
      height: 150, //200
      // backgroundColor: 'green', 
      marginLeft: 20, // 10
      marginRight: 20, //
      borderRadius: 10
    },
    mainContain:{
      // backgroundColor: 'yellow', 
      width: '100%', 
      height: 200
    }
  });