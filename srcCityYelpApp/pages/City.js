import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native';

import { SearchBar, RestaurantCard } from '../components/index';
import data from '../data.json';
import { city } from '../style';

const City = (props) => {

    const cityData = props.route.params.selectedCity;
    const cityRestaurants = data.filter(item => item.neighborhood == cityData);

    //States
    const [displayData, setDisplayData] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    // UseEffect
    useEffect(() => { setDisplayData(cityRestaurants) }, []);

    useEffect(() => {
        const filteredData = cityRestaurants.filter(item => {
            const userText = searchValue.toUpperCase();
            const itemTitle = item.name.toUpperCase();

            return itemTitle.indexOf(userText) > -1;
        });

        setDisplayData(filteredData);

    }, [searchValue])

    // Functions
    const changeText = (text) => { setSearchValue(text) }
    const renderData = (data) => {
        return (
            <RestaurantCard
                onSelect={() => { props.navigation.navigate('RestaurantPage', { selectedRestaurant: data.item }) }}
                data={data.item} />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={city.header}>{`${cityData} Restoranlari`}</Text>
            <SearchBar
                title='Bir restoran arayin...'
                onChangeText={changeText}
            />
            <FlatList
                data={displayData}
                renderItem={renderData}
                keyExtractor={(_, index) => { return index.toString() }}
            />
        </View>
    )
}

export { City }
