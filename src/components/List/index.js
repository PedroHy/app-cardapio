import React from "react";
import { FlatList } from 'react-native';

import styles from './style';
import ProductCard from '../ProductCard';
import pizzas from "../../assets/api";

const List = ()=>{
    return(
        <FlatList style={styles.list}
        data={pizzas}
          renderItem={({item}) => <ProductCard pizza={item} />}>
        </FlatList>
    )
}

export default List;