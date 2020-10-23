import React from 'react'
import { View, Text, Image } from 'react-native'
import { restaurant_card, detail_card } from '../style';

const DetailCard = (props) => {
    return (
        <View>
            <View style={restaurant_card.container}>
                <Image
                    style={restaurant_card.image}
                    source={{ uri: props.data.photograph }}
                />
                <Text style={restaurant_card.text}>{props.data.name}</Text>
            </View>
            <View style={{ borderTopWidth: 1 }}>
                <Text style={detail_card.text}>{props.data.neighborhood}</Text>
                <Text style={detail_card.text}>{props.data.address}</Text>
                <Text style={detail_card.text}>{props.data.phone}</Text>
            </View>
        </View>

    )
}

export { DetailCard }
