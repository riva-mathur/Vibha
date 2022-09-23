import React from 'react';
import {ImageBackground, View, Text, StyleSheet, Pressable} from 'react-native';



const image = { uri: "https://d368g9lw5ileu7.cloudfront.net/races/race78752-social1200x630.bFYauv.jpg" };

const DFWSCREEN = ({navigation}) => {
    return (
       
        <View style = {styles.container}>
            <Text style = {styles.Headline}>Welcome to the DFW Main Page!
            {"\n"}
            {"\n"}
            </Text> 
            <Text style = {styles.Text1}>A brighter future for children!
            {"\n"}
            {"\n"}
            </Text>
            <Text style = {styles.Text2}>Click HERE for current events details and HERE to visit the external registration page
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            </Text>
            <Pressable style = {styles.ButtonContainer}>
                <Text style = {styles.ButtonText}>Share</Text>
            </Pressable>
        </View>
     
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 5,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
    },
    Headline: {
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 130,
    },
    Text1: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'purple',
        fontStyle: 'italic',
        marginTop: 20,
    },
    Text2: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
    ButtonContainer: {
        backgroundColor: 'orange',
        height: 45,
        width: 170,
        justifyContent: 'center',
        marginHorizontal: 930,
        marginTop: 20,
        marginBottom: 190,
        borderColor: 'white',
        borderWidth: 4,
        
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        height: 100,
        width: 700,
    }
  });


  export default DFWSCREEN;
