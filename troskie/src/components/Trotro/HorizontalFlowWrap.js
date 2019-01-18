import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, Image, 
    TouchableWithoutFeedback} from 'react-native';

export default class HorizontalFlowWrap extends Component {
    constructor(props){
        super(props);
        this.state = {
          highlight: []
        }
      }

  render() {
    return (
        <View style={{flex: 1}}>
        <ScrollView style={{marginTop:5}} >
          <View style={styles.contain}>
            {this.props.highlight.map((item)=>{
              return (
                <View style={styles.smallContain} key={item.name.toString()}>
                  <View>
                  <TouchableWithoutFeedback onPress={()=>this.props.navigate(item.name, item.src)}
                // onPress={()=>this.props.navigation.navigate('Details',{name: item.name, src:item.src})}
                >
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
  },
  image:{
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  contain:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  smallContain:{
    width: "44%", 
    marginLeft: "3%", 
    marginRight: "3%", 
    marginBottom: 30, 
    height: 150, 
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