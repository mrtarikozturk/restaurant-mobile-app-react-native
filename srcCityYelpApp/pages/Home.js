import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { CityCard, SearchBar } from '../components/index';
import { home } from '../style';
import data from '../data.json';


const Home = (props) => {

    // States
    const [cityValue, setCityValue] = useState('');
    const [displayData, setDisplayData] = useState([]);

    const cities = data.map(item => item.neighborhood);
    const cityList = [...new Set(cities)];

    //useEffects
    useEffect(() => {
        setDisplayData(cityList);
    }, []);

    useEffect(() => {
        const filteredData = cityList.filter(item => {
            const userText = cityValue.toUpperCase();
            const itemTitle = item.toUpperCase();
            return itemTitle.indexOf(userText) > -1;
        });
        setDisplayData(filteredData);
    }, [cityValue]);
    
    // Functions
    const renderItem = (data) => {
        return (
            <CityCard
                text={data.item}
                onSelect={() => { props.navigation.navigate('CityPage', { selectedCity: data.item }) }}
            />
        )
    }
    const onChangeText = (text) => { setCityValue(text) }

    return (
        <View>
            <Text style={home.header}>Bir sehir seciniz</Text>
            <SearchBar
                title="Bir sehir arayin..."
                onChangeText={onChangeText}
            />
            <FlatList
                data={displayData}
                renderItem={renderItem}
                keyExtractor={(_, index) => { return index.toString() }}
            />
        </View>
    )
}

export { Home }
