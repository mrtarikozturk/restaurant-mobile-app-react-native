import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { city_card } from '../style';

const CityCard = (props) => {
    return (
        <TouchableOpacity
            style={city_card.button}
            onPress={() => { props.onSelect() }}>
            <Text style={city_card.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export { CityCard };
