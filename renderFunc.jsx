import {Text, View, Image, StyleSheet} from "react-native";


const renderFunc = ({name, age}) => {


    return (

    <View style={styles.container}>


        <Image style={styles.container1} source={{ uri: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`}}/>

        <Text>{name}</Text>
        <Text>{age}</Text>


    </View>


)

}



const styles = StyleSheet.create({


    container: {


        flexDirection: "row",
        flexWrap: "wrap",


    },


    container1: {


        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 5,


    },


})

export default renderFunc