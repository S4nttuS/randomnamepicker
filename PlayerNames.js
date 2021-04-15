import React from "react"; // useEffect, // useState,
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

export default function PlayerNames({ setInputList, inputList }) {
    console.log(inputList);
    const handleInputChange = (e, index) => {
        const {value} = e.target;
        const list = [...inputList];
        list[index].playerName = value;
        setInputList(list);
    }

    const onPressDel = (index) => {
        console.log("aa");
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    const onPressAdd = () => {
        setInputList([...inputList, { playerName: "" }]);
    };

    return (
        <View className="App">
            {inputList &&
                inputList.map((x, i) => {
                    return (
                        <View key={i}>
                            <View style = {styles.playerContainer}>
                                <View style = {{left: 15, top: 6}}>
                                    <TextInput
                                        style={{
                                            fontSize: 18,
                                            color: 'red'
                                        }}

                                        placeholder="Player Name"
                                        maxLength={10}
                                        value={x.playerName}
                                        onChange={(e) =>
                                            handleInputChange(e, i)
                                        }
                                    />
                                </View>
                                {inputList.length > 1 && (
                                    <View style = {styles.delBtnContainer}>
                                        <TouchableOpacity
                                            onPress={() => onPressDel(i)}
                                        >
                                            <Text style = {{color: "black", textAlign: 'center', justifyContent: 'center'}}>X</Text>
                                        </TouchableOpacity>

                                    </View>
                                )}
                            </View>
                        </View>
                    );
                })}
                
                <TouchableOpacity
                    style = {styles.button}
                    onPress={onPressAdd}
                >
                    <Text>Add player</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    playerContainer: {
        backgroundColor: 'black',
        borderWidth: 4,
        width: 200,
        height: 50,
        borderRadius: 6,
        borderColor: 'magenta',
        marginBottom: 5,
    },
    playerTextStyle:{
        left: "5%",
    },
    delBtnContainer: {
        left: 200,
        bottom: 18,
        borderWidth: 3,
        borderRadius: 6,
        width: 30,
        height: 30,
        backgroundColor: "red"
    },
    button: {
      borderColor: 'pink',
      borderWidth: 2,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      color: 'black'
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });