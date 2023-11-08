import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './style';
import ProductCard from '../ProductCard';

const List = ()=>{
    return(
        <FlatList style={styles.list}
        data={[
            {key: 'Devin'},
            
          ]}
          renderItem={({item}) => <ProductCard />}>
            

        </FlatList>
    )
}

export default List;