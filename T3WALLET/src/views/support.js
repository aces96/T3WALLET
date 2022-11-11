import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Illustration } from '../components/support.components';






export const Support = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }
    })


    return (
        <View style={styles.container}>
            <Illustration />

        </View>
    )

}