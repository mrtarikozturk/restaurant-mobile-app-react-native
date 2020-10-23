import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { restaurant_card } from '../style';

const RestaurantCard = (props) => {

    const url = props.data.photograph;

    return (
        <TouchableOpacity
            onPress={() => { props.onSelect() }}>
            <View style={restaurant_card.container}>
                <Image
                    style={restaurant_card.image}
                    source={{ uri: url }}
                />
                <Text style={restaurant_card.text}>{props.data.name}</Text>
            </View>
        </TouchableOpacity >
    )
}

export { RestaurantCard };
