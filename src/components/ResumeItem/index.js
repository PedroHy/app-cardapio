import React from "react";
import { View, Text } from 'react-native';

import styles from './style';

const ResumeItem = ({quantite, name, price})=>{
    return(
        <View style={styles.item}>
            <View style={styles.sub}>
                <Text style={styles.txtName}>{quantite}x   </Text>
                <Text style={styles.txtName}>{name}</Text>
            </View>
            <Text style={styles.price}>R${price.toFixed(2).replace('.',',')}</Text>
        </View>
    )
}


export default ResumeItem;