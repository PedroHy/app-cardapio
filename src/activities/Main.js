import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import List from '../components/List';
import { ProductContext } from "../contexts/products";

export default function Main({navigation}){

    const { products } = useContext(ProductContext)
    
    return(
        <View style={styles.container}>
            <List>

            </List>
            <TouchableOpacity style={products.length>0?styles.btnResume:styles.btnResumeDisable} disabled={products.length>0?false:true} onPress={()=>navigation.navigate("Resume")}>
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

    btnResumeDisable:{
        backgroundColor: '#F4DBC1cc',
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
  