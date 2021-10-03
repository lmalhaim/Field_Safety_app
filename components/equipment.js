import { AntDesign } from '@expo/vector-icons';
import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import { AddEquipmentToFav, fetchEquipments, isFave } from '../Api/api';

export default function Equipment(props){
    let [status, setStatus] = React.useState("available");
    let [iconName, setIconName] = React.useState("staro");
    EquipmentStatus();
    function EquipmentStatus(){
        if (!props.status){
            setStatus('unavailable')
        }

    }

    const toggleFave = () => {
        if(props.fave){
            setIconName("staro")
            props.toggleFavorite(props.id);
        }
        else{

            setIconName("star")
            props.toggleFavorite(props.id);
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
            <View style={styles.statusView} >
                 <Text style = {status == 'available' ? {margin: 5, color: 'green'} : {margin: 5, color: 'red'}}>{status}</Text>
            </View>
            <View style={styles.isFavView}>
                <TouchableOpacity onPress = {toggleFave}>
                    <AntDesign name={iconName} size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        // borderColor: "gray",
        // borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        width: Dimensions.get('window').width - 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        shadowColor: 'lightgrey',
        shadowRadius: 5,
        shadowOpacity: 1,
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
    isFavView: {
        position: 'absolute',
        right: 10,
        top: '25%',
    },
    statusView: {

        padding: 5,
        paddingBottom: 5,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',

    },
    incidentsinfo: {
        alignSelf: 'center',
        fontSize: 15,
    }
})
