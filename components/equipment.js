
import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
export default function Equipment(props){
    let [status, setStatus] = React.useState("available")
    EquipmentStatus(); 
    function EquipmentStatus(){
        if (!props.status){
            setStatus('unavailable')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Equipment ID: 
                </Text>
                <Text style = {styles.rowInput}>
                    {props.id}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.rowTitle}>
                    Equipment Name 
                </Text>
                <Text style = {styles.rowInput}>
                    {props.name}
                </Text>
            </View>
            <View style={styles.statusView}>
                 <Text style = {status == 'available' ? {color: 'green'} : {color: 'red'}}>{status}</Text>
            </View>
            <View style={styles.row}>
                <Text style = {styles.isFavorite}>"{props.fave}"</Text>
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
