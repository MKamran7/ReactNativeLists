import {StyleSheet, View, Text, Image, FlatList} from "react-native";
import React from "react";


const users  = [


    { "id": 1, "name": "John Doe", "age": 28 },
    { "id": 2, "name": "Jane Smith", "age": 34 },
    { "id": 3, "name": "Michael Johnson", "age": 41 },
    { "id": 4, "name": "Emily Davis", "age": 22 },
    { "id": 5, "name": "Chris Brown", "age": 31 },
    { "id": 6, "name": "Jessica Wilson", "age": 29 },
    { "id": 7, "name": "Matthew Jones", "age": 37 },
    { "id": 8, "name": "Ashley Garcia", "age": 25 },
    { "id": 9, "name": "David Miller", "age": 45 },
    { "id": 10, "name": "Amanda Martinez", "age": 33 },
    { "id": 11, "name": "James Anderson", "age": 50 },
    { "id": 12, "name": "Sarah Taylor", "age": 27 },
    { "id": 13, "name": "Robert Thomas", "age": 39 },
    { "id": 14, "name": "Megan Hernandez", "age": 24 },
    { "id": 15, "name": "William Moore", "age": 53 },
    { "id": 16, "name": "Jennifer Martin", "age": 35 },
    { "id": 17, "name": "Brian Jackson", "age": 30 },
    { "id": 18, "name": "Nicole Thompson", "age": 26 },
    { "id": 19, "name": "Kevin White", "age": 42 },
    { "id": 20, "name": "Stephanie Lopez", "age": 32 },
    { "id": 21, "name": "Edward Lee", "age": 47 },
    { "id": 22, "name": "Rachel Gonzalez", "age": 23 },
    { "id": 23, "name": "Daniel Harris", "age": 36 },
    { "id": 24, "name": "Christine Clark", "age": 44 },
    { "id": 25, "name": "Paul Lewis", "age": 51 },
    { "id": 26, "name": "Debra Robinson", "age": 58 },
    { "id": 27, "name": "Mark Walker", "age": 38 },
    { "id": 28, "name": "Anna Perez", "age": 21 },
    { "id": 29, "name": "George Hall", "age": 62 },
    { "id": 30, "name": "Rebecca Young", "age": 29 },
    { "id": 31, "name": "Kenneth Allen", "age": 43 },
    { "id": 32, "name": "Sharon Sanchez", "age": 49 },
    { "id": 33, "name": "Steven Wright", "age": 40 },
    { "id": 34, "name": "Kathleen King", "age": 55 },
    { "id": 35, "name": "Edward Scott", "age": 33 },
    { "id": 36, "name": "Shirley Green", "age": 67 },
    { "id": 37, "name": "Brian Baker", "age": 27 },
    { "id": 38, "name": "Amy Adams", "age": 31 },
    { "id": 39, "name": "Ronald Nelson", "age": 54 },
    { "id": 40, "name": "Kimberly Hill", "age": 41 },
    { "id": 41, "name": "Anthony Ramirez", "age": 36 },
    { "id": 42, "name": "Cynthia Campbell", "age": 46 },
    { "id": 43, "name": "Kevin Mitchell", "age": 30 },
    { "id": 44, "name": "Angela Roberts", "age": 38 },
    { "id": 45, "name": "Jason Carter", "age": 25 },
    { "id": 46, "name": "Melissa Phillips", "age": 34 },
    { "id": 47, "name": "Jeffery Evans", "age": 48 },
    { "id": 48, "name": "Deborah Turner", "age": 57 },
    { "id": 49, "name": "Gary Torres", "age": 42 },
    { "id": 50, "name": "Laura Parker", "age": 29 },
    { "id": 51, "name": "Timothy Collins", "age": 35 },
    { "id": 52, "name": "Janet Edwards", "age": 61 },
    { "id": 53, "name": "Frank Stewart", "age": 52 },
    { "id": 54, "name": "Michelle Flores", "age": 26 },
    { "id": 55, "name": "Raymond Morris", "age": 44 },
    { "id": 56, "name": "Joan Nguyen", "age": 39 },
    { "id": 57, "name": "Dennis Murphy", "age": 50 },
    { "id": 58, "name": "Marilyn Rivera", "age": 63 },
    { "id": 59, "name": "Jerry Cook", "age": 47 },
    { "id": 60, "name": "Kelly Rogers", "age": 32 },
    { "id": 61, "name": "Tyler Morgan", "age": 23 },
    { "id": 62, "name": "Beverly Peterson", "age": 56 },
    { "id": 63, "name": "Aaron Cooper", "age": 34 },
    { "id": 64, "name": "Theresa Reed", "age": 41 },
    { "id": 65, "name": "Jose Bailey", "age": 37 },
    { "id": 66, "name": "Denise Bell", "age": 45 },
    { "id": 67, "name": "Adam Gomez", "age": 28 },
    { "id": 68, "name": "Judy Kelly", "age": 60 },
    { "id": 69, "name": "Nathan Howard", "age": 31 },
    { "id": 70, "name": "Christine Ward", "age": 48 },
    { "id": 71, "name": "Douglas Cox", "age": 53 },
    { "id": 72, "name": "Catherine Diaz", "age": 29 },
    { "id": 73, "name": "Zachary Richardson", "age": 26 },
    { "id": 74, "name": "Diane Wood", "age": 52 },
    { "id": 75, "name": "Peter Watson", "age": 46 },
    { "id": 76, "name": "Alice Brooks", "age": 24 },
    { "id": 77, "name": "Kyle Bennett", "age": 33 },
    { "id": 78, "name": "Julie Gray", "age": 39 },
    { "id": 79, "name": "Carl James", "age": 57 },
    { "id": 80, "name": "Heather Reyes", "age": 35 },
    { "id": 81, "name": "Walter Cruz", "age": 64 },
    { "id": 82, "name": "Doris Hughes", "age": 69 },
    { "id": 83, "name": "Arthur Price", "age": 42 },
    { "id": 84, "name": "Jean Myers", "age": 51 },
    { "id": 85, "name": "Ryan Long", "age": 27 },
    { "id": 86, "name": "Marie Foster", "age": 43 },
    { "id": 87, "name": "Joe Sanders", "age": 38 },
    { "id": 88, "name": "Mildred Ross", "age": 71 },
    { "id": 89, "name": "Lawrence Morales", "age": 49 },
    { "id": 90, "name": "Stephanie Powell", "age": 30 },
    { "id": 91, "name": "Albert Sullivan", "age": 55 },
    { "id": 92, "name": "Lori Russell", "age": 47 },
    { "id": 93, "name": "Bruce Ortiz", "age": 50 },
    { "id": 94, "name": "Diana Jenkins", "age": 36 },
    { "id": 95, "name": "Billy Gutierrez", "age": 32 },
    { "id": 96, "name": "Kayla Perry", "age": 25 },
    { "id": 97, "name": "Bryan Butler", "age": 41 },
    { "id": 98, "name": "Lois Barnes", "age": 66 },
    { "id": 99, "name": "Billy Fisher", "age": 28 },
    { "id": 100, "name": "Pamela Henderson", "age": 54 }


]


export default function App() {


    const renderItem = ({ item }: { item: { name: string, age: number } }) => (


        <View style={styles.container}>


            <Image style={styles.container1} source={{ uri: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`}}/>

            <Text>{item.name}{"\n"}{item.age}</Text>


        </View>


    );


    return (


        <FlatList

            data={users}
            renderItem={renderItem}

        />


    );


}


const styles = StyleSheet.create({


    container: {


        flexDirection: "row",


    },


    container1: {


        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 5,


    },


})
