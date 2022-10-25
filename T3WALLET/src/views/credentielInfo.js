import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { DiplomeImage } from '../components/credentielInfo.components';





export const CredentielInfo = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%'
        }
    })

    return (
        <View style={styles.container}>
            <DiplomeImage/>
        </View>
    )
}