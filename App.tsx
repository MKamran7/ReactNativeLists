import {StyleSheet, View, Text, Image, FlatList, Pressable, TouchableOpacity} from "react-native";
import React, {useState} from "react";


const users  = [


    { "id": 1, "name": "John Doe", "age": 28, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 2, "name": "Jane Smith", "age": 34, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 3, "name": "Michael Johnson", "age": 41, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 4, "name": "Emily Davis", "age": 22, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 5, "name": "Chris Brown", "age": 31, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 6, "name": "Jessica Wilson", "age": 29, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 7, "name": "Matthew Jones", "age": 37, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 8, "name": "Ashley Garcia", "age": 25, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 9, "name": "David Miller", "age": 45, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},
    { "id": 10, "name": "Amanda Martinez", "age": 33, uri : `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`},


]


export default function App() {


    const [selectedId, setSelectedId] = useState(null);

    // @ts-ignore
    const renderItem = ({ item }) => {


        const isSelected = item.id === selectedId;


        return (


            <Pressable onPress={() => setSelectedId(isSelected ? null : item.id)}>


                <View style={[styles.container, isSelected && styles.backlight]}>


                    <Image style={styles.container1} source={{uri: item.uri}}/>

                    <Text>{item.name}{"\n"}{item.age}</Text>


                </View>


            </Pressable>


        );


    }


    return (


        <FlatList


            data={users}
            renderItem={renderItem}


        />


    );


}


const styles = StyleSheet.create({


    container: {


        height: 100,
        width: 100,
        margin: 30,
        borderRadius: 10,


    },


    container1: {


        height: 100,
        width: 100,
        borderRadius: 10,


    },


    backlight: {


        height: 100,
        width: 100,
        margin: 30,
        borderRadius: 10,
        boxShadow: '0px 0px 25px rgba(0, 229, 255, 0.8)',


    },


})
