import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


const DFWSCREEN = ({navigation}) => {
    return (
        <View style = {StyleSheet.container}>
            <Text>
                HomeScreen
            </Text>
            <Button
                title = "Click here"
                onPress={() => alert('Button clicked')}
            />
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
  });


  export default DFWSCREEN;
