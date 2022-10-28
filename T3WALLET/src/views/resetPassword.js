import * as React from 'react';
import {View, StyleSheet} from 'react-native'
import { Illustration, InputView } from '../components/resetPassword.components';





export const ResetPassword = ()=>{
    
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }
    })

    return (
        <View style={styles.container}>
            <Illustration/>
            <InputView />
        </View>
    )
}