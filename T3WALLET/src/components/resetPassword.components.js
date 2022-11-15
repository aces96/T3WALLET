import * as React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import EmailIllustration from '../images/emailIllustration.svg'
import EmailIllustration2 from '../images/illustrationSvg2.svg'





export const Illustration = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100
        }
    })


    return (
        <View style={styles.container}>
            <EmailIllustration2 width= '50%' height= '100%'/>
        </View>
    )
}


export const InputView = ()=>{

    const [validationCode, setValidationCode] = useState('')

    const styles= StyleSheet.create({
        container: {
            width: '100%',
            height: 400
        },
        title: {
            fontSize: 25, 
            fontFamily: 'Roboto-Medium',
            color: '#24A19C',
            textAlign: 'center',
            marginBottom: 10
        },
        text:{
            fontSize: 16,
            fontFamily: 'Roboto-Medium',
            color: 'rgba(0,0,0,0.4)',
            textAlign: 'center',
            marginBottom: 30
        },
        input: {
            width: '90%',
            height: 60,
            alignSelf: 'center',
            borderColor: '#24A19C',
            borderWidth: 2,
            borderRadius: 15,
            paddingLeft: 20,
            color: 'black'
        },
        button: {
            width: '90%',
            height: 65,
            alignSelf: 'center',
            backgroundColor: '#24A19C',
            marginTop: 50,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Check your email
            </Text>
            
            <Text style={styles.text}>
                lorem lorem lorem lorem lorem lorem
            </Text>

            <TextInput onChangeText={(e)=>setValidationCode(e)} style={styles.input} value={validationCode} placeholder='enter the validation code' placeholderTextColor= 'rgba(0,0,0,0.4)' />

            <TouchableOpacity  style={styles.button}>
                <Text style={{color: 'white', fontSize: 20}}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    )
}