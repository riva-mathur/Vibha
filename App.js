import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import DFWSCREEN from "./screens/DFWMAINPAGE";




const App = () => {
    return(
      <View>
        <DFWSCREEN></DFWSCREEN>
      </View>
    );
}

const styles = StyleSheet.create({
  
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
  },
  
});


export default App;




