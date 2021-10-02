import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAhdyDuzoPuLfIsc2hefAO1CBUZ5GZZy0o",
    authDomain: "fieldsafety-47193.firebaseapp.com",
    databaseURL: "https://fieldsafety-47193-default-rtdb.firebaseio.com",
    projectId: "fieldsafety-47193",
    storageBucket: "fieldsafety-47193.appspot.com",
    messagingSenderId: "620054468144",
    appId: "1:620054468144:web:a3b0adcc4c4cb77e85bff5",
    measurementId: "G-WFH7VDYTG1",
};

if (firebase.apps.length == 0) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.log(err);
  }
}

const dataBase = firebase.firestore(); 

const usersRef = db.collection('User');

export async function addUser(){
    const deviceAPI = "";
    try{
        const userID = usersRef.doc(deviceAPI).get()
        console.log(userID)

    }catch(err){
        console.log(err); 
    }
}

const equipementsRef = db.collection('Equipement');

