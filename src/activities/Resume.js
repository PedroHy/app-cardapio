import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ResumeItem from '../components/ResumeItem';

export default function Resume({ navigation }) {

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={[
                    { key: 'item1' },
                ]}
                renderItem={({ item }) => <ResumeItem />}>
            </FlatList>
            <View style={styles.totalArea}>
                <Text style={styles.txtTotal}>Total:</Text>
                <Text style={styles.txtValueTotal}>R$00,00</Text>
            </View>
            <TouchableOpacity style={styles.btnFinish} onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnFinish: {
        backgroundColor: '#F29F05',
        height: 90,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    list: {
        height: 560,
        width: '100%'
    },

    totalArea:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#fafafa',
        height: 50
    },

    btnText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },

    txtTotal:{
        fontWeight: 'bold', 
        fontSize: 18
    },

    txtValueTotal:{
        fontSize: 18
    }
});