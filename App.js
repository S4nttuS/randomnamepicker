import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PlayerNames from "./PlayerNames";

export default function App() {
  
  const [inputList, setInputList] = useState([
    { playerName: "player A" },
    { playerName: "player B" },
]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <PlayerNames 
          setInputList={setInputList}
          inputList={inputList}
        />
      <View style = {styles.startGameBtn}>
        <TouchableOpacity>
          <Text style = {styles.startGameText}>Start game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
