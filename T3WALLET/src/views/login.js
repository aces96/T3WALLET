import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import {useCallBack} from 'react'

import { View, StyleSheet } from 'react-native';
import { Logo } from '../components/login.components';


export const Login = ()=>{

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
        }
    })
    return (
        <View style={styles.container}>
            <Logo />
        </View>
    )
}