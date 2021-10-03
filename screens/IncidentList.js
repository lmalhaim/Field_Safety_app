import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, ScrollView, Modal, TouchableHighlightBase, StyleSheet, ImageBackground } from "react-native"
import { addUser, fetchIncidents } from "../Api/api";
import Incident from "../components/incident";

class IncidentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            incidents : [],
        };
    }

    RetrievedIncidents = (recievedData) => {
        this.setState((prevState)=>({
            incidents: (prevState.incidents = recievedData),
        }));
    }
    async componentDidMount(){
       console.log('here', 'incident');
        await fetchIncidents(this.RetrievedIncidents);
    }
    render(){
        return(
            <View  style = {styles.container}>
              <ScrollView style = {styles.scrollList} >
                  {this.state.incidents.map(
                      (item, index)=>{
                          return(
                              <View key = {index}>
                                  <Incident id = {item.incident_id} created_by = {item.created_by} equipement_id = {item.equipement_id} status = {item.status} content = {item.content}/>
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
        // paddingTop: 40,
        // paddingBottom: 40,
        backgroundColor: 'whitesmoke',
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
})

export default IncidentList;
