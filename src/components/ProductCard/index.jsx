import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './style';

const ProductCard = ()=>{
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={require('../../assets/pizzas/margerita.png')}></Image>
            <View style={styles.content}>
                <Text style={styles.productName}>Margerita</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Text>
                <View style={styles.addArea}>
                    <TouchableOpacity style={styles.btnLess}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity style={styles.btnMore}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductCard;