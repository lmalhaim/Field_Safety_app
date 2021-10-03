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
                    Created by:
                </Text>
                <Text style = {styles.rowInput}>
                    {props.created_by}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Equipmet id:
                </Text>
                <Text style = {styles.rowInput}>
                    {props.equipement_id}
                </Text>
            </View>
            <View style={styles.statusView}>
               <Text style = {props.status != 'rejected' ? {color: 'green', fontWeight: 'bold'} : {color: 'red', fontWeight: 'bold'}}>{props.status}</Text>
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
        backgroundColor: 'white',
        // borderColor: "black",
        // borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        width: Dimensions.get('window').width - 20,
        shadowColor: 'lightgrey',
        shadowRadius: 5,
        shadowOpacity: 1,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
    },
    rowInput: {
        margin: 7,
        color: 'black',
        fontSize: 14
    },
    rowTitle: {
        color: 'black',
        margin: 7,
        fontWeight: 'bold',
        fontSize: 16
    },
    statusView: {
        position: 'absolute',
        right: 5,
        top: '40%',
        padding: 5,
        paddingBottom: 5,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',

    },
    incidentsinfo: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'black',
        marginLeft: 5
    },
})
