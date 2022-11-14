import * as React from 'react';
import { useState } from 'react';
import SupportSvg from '../images/supportSvg.svg'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';





export const Illustration = ()=>{


    const styles = StyleSheet.create({
        container: {
            width: '50%',
            height: 300,
            alignSelf: 'center',
            marginTop: 20
        }
    })

    return (
        <View style={styles.container}>
            <SupportSvg width={'100%'} height={'100%'}/>
        </View>
    )
}


export const SupportText = ()=>{

    const [email, setEmail] = useState('')
    const [inputValue, setInputValue] = useState('')


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10
        },
        text: {
            fontSize: 15,
            fontFamily: 'Roboto-Medium',
            color: 'black',
            textAlign: 'center',
            marginBottom: 40
        },
        inputsView: {
            height: 220,
            width: '100%',
            justifyContent: 'space-around'
        },
        input: {
            width: '90%',
            height: 120,
            borderWidth: 2,
            borderColor: '#24A19C',
            borderRadius: 15,
            alignSelf: 'center',
            paddingLeft: 10,
            color: 'black'
        },
        emailInput: {
            width: '90%',
            height: 55,
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: '#24A19C',
            borderRadius: 15,
            color: 'black',
            paddingLeft: 10
        },
        submitButton: {
            width: '90%',
            height: 65,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 20,
            backgroundColor: '#24A19C',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems:'center'
        }
    })

    return (
        <View style={styles.container} >
            <Text style={styles.text}>
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, 
            Le lorem ipsum est, en imprimerie, calibrer une mise en page, 
            </Text>

            <View style={styles.inputsView}>
                
            <TextInput onChangeText={e=>setEmail(e)} value={email} placeholder='email@email.com' placeholderTextColor={'rgba(0,0,0,0.5)'} style={styles.emailInput} />
            <TextInput onChangeText={e=>setInputValue(e)} placeholderTextColor={'rgba(0,0,0,0.5)'} placeholder='message ....' multiline={true} style={styles.input} value={inputValue} />
            </View>

            <TouchableOpacity style={styles.submitButton}>
                <Text style={{fontSize: 20, color: 'white'}}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}