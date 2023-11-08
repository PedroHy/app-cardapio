import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 180,
        backgroundColor: '#fff',
        marginBottom:4,
        borderRadius: 10,
        position: 'relative',
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: '#cecece',
        borderBottomWidth: 1
    },

    img:{
        height: 150,
        width: 150,
        borderRadius: 10,
        marginStart: 10,
        objectFit: 'contain'
    },

    content:{
        height: 150,
        width: 150,
        padding: 10,
        width: '55%'
    },

    productName:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    addArea: {
        flexDirection: 'row',
        height: 40,
        width: 100,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    btnLess: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29F05',
        width: 33,
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },

    btnMore: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29F05',
        width: 33,
        height: '100%',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    btnText:{
        fontWeight: 'bold',
        color: '#fff'
    },
    description:{
        marginTop: 10
    }
});

export default styles;