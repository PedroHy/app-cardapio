import React from "react";

import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { useState, useContext } from 'react';
import { ProductContext } from "../../contexts/products";

const ProductCard = ()=>{

    const { addProduct, removeProduct, updateQuantite } = useContext(ProductContext);
    const [ quantite, setQuantite ] = useState(0);

    const handleAdd = ()=>{
        setQuantite(quantite+1)
        if(quantite == 0){
            addProduct(
                {
                    id:1,
                    quantite: 1,
                    name: 'Mussarela',
                    description: 'descrição',
                    price: 28.99
                }
            )
        }else{
            updateQuantite({
                id:1,
                quantite: quantite+1,
                name: 'Mussarela',
                description: 'descrição',
                price: 28.99
            })
        }
    }

    const handleRemove = ()=>{
        setQuantite(quantite-1)
        updateQuantite(
            {
                id:1,
                quantite: quantite-1,
                name: 'Mussarela',
                description: 'descrição',
                price: 28.99
            }
        )
        if(quantite-1 == 0){
            removeProduct(
                {
                    id: 1,
                    quantite: 1,
                    name: 'Mussarela',
                    description: 'descrição',
                    price: 28.99
                }
            )
        }
    }

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
                    <TouchableOpacity style={styles.btnLess} disabled={quantite>0?false:true} onPress={()=>handleRemove()}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text>{quantite}</Text>
                    <TouchableOpacity style={styles.btnMore} onPress={()=>handleAdd()}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductCard;