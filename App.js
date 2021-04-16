import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import PlayerNames from "./PlayerNames";
import raffle from "./raffle";
import { MenuProvider } from "react-native-popup-menu";

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  
  const [inputList, setInputList] = useState([
    { playerName: "player A" },
    { playerName: "player B" },
  ]);

  
  function onPress(){
      
    navigation.navigate("Raffle", {
      inputList: inputList
    });
  }
  
  return (
      <View style={styles.container}>

        <PlayerNames 
          setInputList={setInputList}
          inputList={inputList}
        />
        <View style = {styles.startGameBtn}>
          <TouchableOpacity
             onPress={onPress}
          >
            <Text style = {styles.startGameText}>Start game</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Raffle" component={raffle} />
      </Stack.Navigator>
    </NavigationContainer>
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
