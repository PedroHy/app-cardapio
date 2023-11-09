import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        padding: 8,
        borderBottomColor: '#cecece',
        borderBottomWidth: 1
    },

    txtName: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    price:{
        fontSize: 18
    },

    sub:{
        flexDirection: 'row'
    }
});

export default styles;