import { View, Text, TouchableOpacity} from 'react-native';

import styles from './style';

const ResumeItem = ()=>{
    return(
        <View style={styles.item}>
            <Text style={styles.txtName}>Nome Produto</Text>
            <Text style={styles.price}>R$25,00</Text>
        </View>
    )
}


export default ResumeItem;