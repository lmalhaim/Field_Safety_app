import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, ScrollView, Modal, TouchableHighlightBase, StyleSheet } from "react-native"
import { addUser, fetchIncidents, fetchSafetyDocs } from "../Api/api";

class DocList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            docs : [], 
        };
    }

    RetrievedDocs = (recievedData) => {
        this.setState((prevState)=>({
            docs: (prevState.docs = recievedData), 
        }));  
    }
    async componentDidMount(){
        await fetchSafetyDocs(this.RetrievedDocs); 
    }
    render(){
        return(
            <View  style = {styles.container}>
                <ScrollView style = {styles.scrollList} >
                    {this.state.incidents.map(
                        (item, index)=>{
                            return(
                                <View key = {index}>
                                    <Document id = {item.incident_id} created_by = {item.created_by} equipement_id = {item.equipement_id} status = {item.status} content = {item.content}/>
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