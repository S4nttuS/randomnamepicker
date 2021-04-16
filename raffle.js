import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import PlayerNames from "./PlayerNames";

export default function raffle ({ navigation, route }){

    
    const { inputList } = route.params;

    var names = [];
    
    for (var x = 0; x < 10; x++) {
        if (inputList[x] != null) {
            inputList[x] = names[x];
        }
    }

    
    const playernames = namesArray.map((n, idx) => { 
        // console.log('namesArray idx:' + idx);
        return (
            <View style={style} key={idx}>
                <Img style={styles.drawImage} />
                <View style={styles.playerNameContainer}>
                    <Text style={playerNameText}>{n}</Text>
                </View>
            </View>
        );
    });

    return(
        <View style = {styles.container}>
            <Text>This is a raffle!</Text>
            
            
            <View style = {styles.startGameBtn}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style = {styles.startGameText}>Home screen</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    startGameBtn: {
      width: 150,
      height: 40,
      backgroundColor: "green",
      borderWidth: 3,
      borderRadius: 6,
      borderColor: 'black',
      marginTop: 30
    },
    startGameText:{
      fontStyle: 'bold',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 22,
  
    }
  });