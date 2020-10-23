import React from 'react';
import { View, TextInput } from 'react-native';

import { search_bar } from '../style';

const SearchBar = (props) => {
    return (
        <View style={search_bar.container}>
            <TextInput
                placeholder={props.title}
                onChangeText={(value) => { props.onChangeText(value) }} />
        </View>
    )
}

export { SearchBar };