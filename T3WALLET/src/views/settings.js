import * as React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { ProfilInfoCard, ResetPasswordCard } from '../components/settingsScreen.components';
import SystemNavigationBar from 'react-native-system-navigation-bar';




export const Settings = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        },
        text: {
            fontFamily: 'Oswald-Medium',
            color: 'black',
            fontSize: 27,
            marginTop: 20,
            marginLeft: 15,
            marginBottom: 30
        }
    })

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <ProfilInfoCard />
            <Text style={styles.text}>
                Settings
            </Text>

            <ResetPasswordCard />

        </View>
    )
}