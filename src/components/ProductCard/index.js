import React from "react";

import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useState } from 'react';

const ProductCard = ()=>{

    const [ quantite, setQuantite ] = useState(0);

    return(
        <View style={styles.card}>
            <Image style={styles.img} source={require('../../assets/pizzas/margerita.png')}></Image>
            <View style={styles.content}>
                <Text style={styles.productName}>Margerita</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </Text>
                <Text style={styles.price}>R$00,00</Text>
                <View style={styles.addArea}>
                    <TouchableOpacity style={styles.btnLess} disabled={quantite>0?false:true} onPress={()=>setQuantite(quantite-1)}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text>{quantite}</Text>
                    <TouchableOpacity style={styles.btnMore} onPress={()=>setQuantite(quantite+1)}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductCard;