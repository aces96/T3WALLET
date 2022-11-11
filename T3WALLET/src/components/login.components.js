import * as React from 'react';

import { View , StyleSheet, TextInput} from 'react-native';
import T3Logo from '../images/logo.svg'


export const Logo = ()=>{
    const styles= StyleSheet.create({
        container: {
            width: '100%',
            height: 150,
            alignSelf: 'center',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center'
        },
    })



    return (
        <View style={styles.container}>
            <T3Logo width={200} height={200}/>
        </View>
    )
}



export const LoginInput = (props)=>{
    const styles = StyleSheet.create({
        input: {
            width: '90%',
            height: 60,
            borderRadius:  15,
            borderWidth : 2,
            backgroundColor: 'rgba(0,0,0,0.05)',
            alignSelf: 'center',
            paddingLeft: 15,
            color: 'black',
            marginTop: 20
        }
    })
    return (
        <TextInput onChangeText={(e)=>props.handleChange(e)} secureTextEntry={props.secureTextEntry} style={{...styles.input, borderColor: props.color}} value={props.value} placeholder={props.placeholder} placeholderTextColor={'rgba(0,0,0,0.4)'}/>
    )

}