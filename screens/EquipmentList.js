import * as React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, Button, onPress } from "react-native";
import { fetchEquipments } from "../Api/api";
import Equipment from "../components/equipment";


class IncidentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            equipments : [], 
        };
    }

    RetrievedEquipments = (recievedData) => {
        this.setState((prevState)=>({
            equipments: (prevState.equipments = recievedData), 
        }));  
    }
    async componentDidMount(){
        await fetchEquipments(this.RetrievedEquipments); 
    }
    render(){
        return(
            <View  style = {styles.container}>
                <ScrollView style = {styles.scrollList} >
                    {this.state.equipments.map(
                        (item, index)=>{
                            return(
                                <View key = {index}>
                                    <Equipment  id = {item.id}
                                    name = {item.name} 
                                    status= {item.status}
                                    fave ={item.fave}/>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 100,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default IncidentList; 
/*
export default function SubmitEquipment(props){


    return (
        <View style={{ flex: 1 }}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 0.4
    },
    titletext: {
        marginTop: 70,
        marginLeft: 75,
        alignItems: "center",
        fontSize: 30,

    },
    equip1: {
        flex: 0.5,
        backgroundColor: "#E6E6FA",
        fontSize: 60,
        alignItems: "center",
    },
    equip2: {
        flex: 0.5,
        backgroundColor: "#FFF0F5",
        fontSize: 60,
        alignItems: "center"
    },
    equip3: {
        flex: 0.5,
        backgroundColor: "#E6E6FA",
        fontSize: 20,
        alignItems: "center"
    },
    equip4: {
        flex: 0.5,
        backgroundColor: "#FFF0F5",
        fontSize: 60,
        alignItems: "center"
    },
    submitbutton: {
        color: "black"
    }
})*/