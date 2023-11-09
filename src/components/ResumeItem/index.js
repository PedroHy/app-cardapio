import React from "react";
import { View, Text } from 'react-native';

import styles from './style';

const ResumeItem = ()=>{
    return(
        <View style={styles.item}>
            <View style={styles.sub}>
                <Text style={styles.txtName}>2x   </Text>
                <Text style={styles.txtName}>Nome Produto</Text>
            </View>
            <Text style={styles.price}>R$25,00</Text>
        </View>
    )
}


export default ResumeItem;