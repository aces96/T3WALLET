import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Illustration, SupportText } from '../components/support.components';






export const Support = ()=>{

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
        }
    })




    return (
        <View  style={styles.container}>
            <Illustration />
            <SupportText />

        </View>
    )

}