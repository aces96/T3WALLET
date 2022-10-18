import * as React from 'react';

import { View , StyleSheet, Image} from 'react-native';



export const Logo = ()=>{
    const styles= StyleSheet.create({
        container: {
            width: 160,
            height: 160,
            transform: [{rotate: '40deg'}],
            alignSelf: 'center',
            marginTop: 40
        },
    })



    return (
        <View style={styles.container}>
            <Image style={{height: 160, width: 160}} source={require('../images/bg5.png')}/>
        </View>
    )
}