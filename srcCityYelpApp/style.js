import { StyleSheet, Dimensions } from 'react-native';

//Home Page
const home = StyleSheet.create({
    header: {
        fontSize: 30,

    }
});

// City Page
const city = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center'
    }
})

//SearchBar Component
const search_bar = StyleSheet.create({
    container: {
        backgroundColor: '#99a8b2',
        paddingHorizontal: 8,
        margin: 5,
        borderRadius: 10,
    }
});

//CityCard Component
const city_card = StyleSheet.create({
    button: {
        borderBottomWidth: 2,
        borderBottomColor: '#e0e0e0'
    },
    text: {
        textAlign: 'center',
        padding: 10,

    }
})

//RestaurantCard Component
const restaurant_card = StyleSheet.create({
    container: {
        backgroundColor: '#F57C00',
        margin: 10,
        padding: 5,
        borderRadius: 10,

    },
    text: {
        color: 'white',
        fontSize: 24,

    },
    image: {
        resizeMode: 'contain',
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width * 0.90,

        alignSelf: 'center',
    }

});

// DetailCard Component
const detail_card = StyleSheet.create({
      
    text: {
        padding: 10,
        margin: 5,
        backgroundColor: '#1D8AE5',
        borderRadius: 5,
        color: 'white'

    }
})


export { home, search_bar, city_card, restaurant_card, city, detail_card };