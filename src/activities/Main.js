import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import List from '../components/List';

export default function Main({navigation}){

    return(
        <View style={styles.container}>
            <List>

            </List>
            <TouchableOpacity style={styles.btnResume} onPress={()=>navigation.navigate("Resume")}>
                <Text style={styles.btnText}>Fazer Pedido</Text>
            </TouchableOpacity>
            <View style={styles.bottomSpace}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },

    btnResume:{
        backgroundColor: '#F29F05',
        height: 90,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    btnText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
});
  