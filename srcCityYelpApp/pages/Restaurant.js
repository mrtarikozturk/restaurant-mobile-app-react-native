import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { DetailCard } from '../components/index';

const Restaurant = (props) => {

    const restaurantData = props.route.params.selectedRestaurant;

    //States
    const [displayData, setDisplayData] = useState([]);

    //useEffect
    useEffect(() => { setDisplayData(restaurantData) }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <DetailCard
                data={displayData}
            />
            <Text style={{ color: '#1D8AE5', textAlign: 'center', margin: 20 }}>Rezervasyon Yaptir</Text>
        </View>
    )
}

export { Restaurant }
