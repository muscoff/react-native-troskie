import React from 'react';
import { StyleSheet, View, StatusBar, Text} from 'react-native';

export default Header = (props) => {
    return(
        <View>
        <StatusBar style={styles.statusBar} />
            <View style={styles.topTitleContainer}>
                <Text style={styles.topTitleText}>{props.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topTitleContainer: {
        marginBottom: 20, 
        marginTop: 10
    },
    topTitleText:{
        fontSize: 30, 
        fontWeight: '300', 
        color: '#2a2e43', 
        textAlign:'center'
    },
    statusBar:{
        backgroundColor: "#2a2e43"
    }
});