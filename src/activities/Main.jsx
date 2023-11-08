import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Main({navigation}){

    return(
        <View style={styles.container}>
            <Text>Main Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Resume")}>
                <Text>Resume</Text>
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
  