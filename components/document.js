import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions, Button } from "react-native";

export default function Document(props){
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    {props.name}
                </Text>
                <Button title = "view" onPress = {()=>{}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        backgroundColor: 'lightgrey',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10, 
        width: Dimensions.get('window').width - 20,
    },
    row: {
        flexDirection: 'row', 
    },

    rowTitle: {
        color: 'gray', 
        marginLeft: 5, 
        fontWeight: 'bold', 

    },
    statusView: {
        position: 'absolute', 
        right: 5,
        top: '30%',   
    },
    
    incidentsinfo: {
        alignSelf: 'center',
        fontSize: 15,
    }
})