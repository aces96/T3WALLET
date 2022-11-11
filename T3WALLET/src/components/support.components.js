import * as React from 'react';
import SupportSvg from '../images/supportSvg.svg'
import { View, StyleSheet } from 'react-native';





export const Illustration = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '80%',
            height: 300,
            alignSelf: 'center',
            marginTop: 80
        }
    })

    return (
        <View style={styles.container}>
            <SupportSvg width={'100%'} height={'100%'}/>
        </View>
    )
}