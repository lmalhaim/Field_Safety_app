import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";

export default function Incident(props){

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Incident ID: 
                </Text>
                <Text style = {styles.rowInput}>
                    {props.id}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Created by 
                </Text>
                <Text style = {styles.rowInput}>
                    {props.created_by}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Equipmet id 
                </Text>
                <Text style = {styles.rowInput}>
                    {props.equipement_id}
                </Text>
            </View>
            <View style={styles.statusView}>
                 <Text style = {props.status == 'pending' ? {color: 'green'} : {color: 'red'}}>{props.status}</Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.incidentsinfo}>"{props.content}"</Text>
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
    rowInput: {
        marginLeft: 5, 
        
    },
    rowTitle: {
        color: 'gray', 
        marginLeft: 5, 

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