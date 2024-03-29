import * as React from 'react';
import {LogBox} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../views/homeScreen';
import { DataTable } from '../views/dataTable';
import { Login } from '../views/login';
import { CredentielInfo } from '../views/credentielInfo';
import { QrcodeView } from '../views/qrcodeView';
import { Settings } from '../views/settings';
import { ResetPassword } from '../views/resetPassword';
import { Support } from '../views/support';
import { Charts } from '../views/charts';
import { OnBoarding } from '../views/onBoarding';

const Stack = createNativeStackNavigator();


export const Navigation = ()=>{

    LogBox.ignoreLogs(['Warning: ...']);

    return (
        
        <NavigationContainer >
            <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
                <Stack.Screen name='home' component={Home} />
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='dataTable' component={DataTable}/>
                <Stack.Screen name='credInfo' component={CredentielInfo}/>
                <Stack.Screen name='qrcode' component={QrcodeView}/>
                <Stack.Screen name='settings' component={Settings}/>
                <Stack.Screen name='resetPassword' component={ResetPassword}/>
                <Stack.Screen name='support' component={Support}/>
                <Stack.Screen name='charts' component={Charts}/>
                <Stack.Screen name='onBoarding' component={OnBoarding}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}