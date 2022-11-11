import * as React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { ProfilInfoCard, ResetPasswordCard, EnableFingerPrint, LogOutButton, HelpCard , SupportButton, SettingsList} from '../components/settingsScreen.components';
import SystemNavigationBar from 'react-native-system-navigation-bar';




export const Settings = ()=>{
    SystemNavigationBar.navigationHide()

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(211,211,211, 0.3)'
        },
        text: {
            fontFamily: 'Oswald-Medium',
            color: 'rgba(0,0,0,0.7)',
            fontSize: 25,
            marginTop: 10,
            marginLeft: 15,
        }
    })






    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <ProfilInfoCard  />
            <View style={{height: 70, backgroundColor: 'transparent', width: '100%'}}>
            <Text style={styles.text}>
                Settings
            </Text>
            </View>
            {/* <ResetPasswordCard />
            <EnableFingerPrint />
            <HelpCard />
            <SupportButton/>
            <LogOutButton /> */}
            <SettingsList />
            <View style={{width: '100%', height: 30, position: 'absolute', bottom: 10}}>
                <Text style={{fontSize: 13, color: 'black', textAlign: 'center', fontFamily: 'Roboto-Medium'}}>
                    ©2022 T3 Technologies
                </Text>
            </View>
        </View>
    )
}