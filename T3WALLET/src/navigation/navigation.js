import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../views/homeScreen';
import { DataTable } from '../views/dataTable';


const Stack = createNativeStackNavigator();


export const Navigation = ()=>{

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='dataTable' screenOptions={{headerShown: false}}>
                <Stack.Screen name='home' component={Home} />
                <Stack.Screen name='dataTable' component={DataTable} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}