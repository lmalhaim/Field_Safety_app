import * as React from "react";
import {TextInput, View, Button, StyleSheet, Alert, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { fetchEquipments, postIncident } from "../Api/api";
export default function IncidentForm(){
    let [equipment, setEquipment] = React.useState("")
    let [content, setContent] = React.useState("")
    let [equipments, setEquipments] = React.useState([]);

    React.useEffect(()=>{
        fetchEquipments(setEquipments);
        console.log(equipments);
    }, []);
    function postIncidentHandler(){
        if(content == "" || equipment == ""){
            Alert.alert('Error', 'Please enter valid input', 'ok');
        }else{
            postIncident(equipment, content);
        }

    }
    return(
        <View style={styles.container}>
            <View style = {styles.textTitle} >
                <Text style = {styles.fieldTitle}>
                    Equipment ID
                </Text>
                {<Picker
                style = {styles.textTitle}
                mode = "dropdown"
                selectedValue = {equipment}
                onValueChange = {(item)=>{
                    setEquipment(item)
                }}
                >
                {
                    equipments.map((item)=>{
                        return(
                            <Picker.Item label = {item.id} value = {item.id} key = {item.id} />
                        )
                    })
                }

                </Picker>}
                </View>

            <View style = {styles.textContent}>
                <TextInput placeholder ={"what happened?"}
                value = {content}
                onChangeText = {(text)=>{setContent(text)}} />
            </View>
            <Button title = "submit" onPress = {()=>{postIncidentHandler()}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'whitesmoke',
    },
    textTitle:{
        margin: 20,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 20,
        shadowColor: 'lightgrey',
        shadowRadius: 5,
    },
    textContent:{
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'lightgrey',
        shadowRadius: 5,
    },
    fieldTitle: {
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 20,
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }

})

/* <TextInput placeholder = {"equipment ID"}
                value = {equipment}
                onChangeText ={(text)=>setEquipment(text)}/>*/
