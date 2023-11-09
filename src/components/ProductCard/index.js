import styles from './style';

import { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ProductContext } from "../../contexts/products";

const ProductCard = ({pizza})=>{

    const { addProduct, removeProduct, updateQuantite } = useContext(ProductContext);
    const [ quantite, setQuantite ] = useState(0);

    const handleAdd = ()=>{
        setQuantite(quantite+1)
        if(quantite == 0){
            addProduct(
                {
                    id: pizza.id,
                    quantite: 1,
                    name: pizza.name,
                    description: pizza.description,
                    price: pizza.price
                }
            )
        }else{
            updateQuantite(
                {
                    id: pizza.id,
                    quantite: quantite+1,
                    name: pizza.name,
                    description: pizza.description,
                    price: pizza.price
                }
            )
        }
    }

    const handleRemove = ()=>{
        setQuantite(quantite-1)
        updateQuantite(
            {
                id: pizza.id,
                quantite: quantite-1,
                name: pizza.name,
                description: pizza.description,
                price: pizza.price
            }
        )
        if(quantite-1 == 0){
            removeProduct(pizza)
        }
    }

    return(
        <View style={styles.card}>
            <Image style={styles.img} source={pizza.img}></Image>
            <View style={styles.content}>
                <Text style={styles.productName}>{pizza.name}</Text>
                <Text style={styles.description}>
                    {pizza.description}
                </Text>
                <Text style={styles.price}>R${pizza.price.toFixed(2).replace('.',',')}</Text>
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