import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Resume({navigation}){

    return(
        <View  style={styles.container}>
            <Text>Resume Screen</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text>back</Text>
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
});