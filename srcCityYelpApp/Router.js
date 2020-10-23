import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, City, Restaurant } from './pages/index';

const Stack = createStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='HomePage'
                screenOptions={{
                    headerShown: true,
                    gestureEnabled: true
                }}
            >
                <Stack.Screen
                    name='HomePage'
                    component={Home}
                />
                <Stack.Screen
                    name='CityPage'
                    component={City}
                />
                <Stack.Screen
                    name='RestaurantPage'
                    component={Restaurant}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Router;
