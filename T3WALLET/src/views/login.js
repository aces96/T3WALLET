import * as React from 'react';
import { useState, useCallback} from 'react'
import { LoginInput } from '../components/login.components';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity, Switch , Image, ToastAndroid, StatusBar, ImageBackground} from 'react-native';
import { Logo } from '../components/login.components';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import {useNavigation} from '@react-navigation/native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import BackgroundImage from '../images/CurveLine.svg'



export const Login = ()=>{

    SystemNavigationBar.navigationHide()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEnabled, setIsEnabled] = useState(true)
    const [fingerPrint, setFingerPrint] = useState(false)
    const navigation = useNavigation()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
        },
        inputsView: {
            width: '100%',
            height: 150,
            justifyContent: 'space-around'
        },
        button: {
            width: '85%',
            height: 52,
            backgroundColor: '#24A19C',
            alignSelf: 'center',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
        }, 
        rememberMe: {
            width: '100%',
            height: 50,
            marginTop: 10
        },
        icon: {
            width: 65,
            height: 65,
            alignSelf: 'center',
            marginTop: 70
        }
    })

    const getBiometrics = async ()=>{
        const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })

        const {biometryType} =  await rnBiometrics.isSensorAvailable()


        let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
        let payload = epochTimeSeconds + 'some message'

        if ( biometryType === BiometryTypes.Biometrics) {
            setFingerPrint(true)
        }
    }
    useFocusEffect(
        useCallback( ()=>{
        
            getBiometrics()

        return ()=>{
            null
        }
        },[])
    )
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <Logo />

            <Text style={{fontSize: 30, color: 'black', textAlign: 'center', marginBottom: 60, fontWeight: '600'}}>
                Login
            </Text>

            <View style={styles.inputsView}>
                <LoginInput handleChange={(e)=>{
                    setEmail(e)
                }} secureTextEntry={false} placeholder={'enter email'} value={email} />

                <LoginInput handleChange={(e)=>{
                    setPassword(e)
                }} secureTextEntry={true} placeholder={'enter password'} value={password} />
            </View>

            <View style={styles.rememberMe}>

                <Text style={{color: 'black', position: 'absolute', right: 60}}>
                    Souviens de moi
                </Text>
                <Switch 
                style={{position: 'absolute', right: 20}} 
                thumbColor={isEnabled ? "#24A19C" : "grey"}
                onValueChange={()=>setIsEnabled(!isEnabled)}
                value={isEnabled}/>


            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize: 18, color: 'white', fontWeight: '400'}}>
                    Submit
                </Text>
            </TouchableOpacity>
            <Text style={{color: '#24A19C', textAlign: 'center', marginTop: 20, textDecorationLine: 'underline'}}>
                mot de passe oublier ?
            </Text>


                {fingerPrint &&
                <TouchableOpacity onPress={()=>{
                    const rnBiometrics = new ReactNativeBiometrics({allowDeviceCredentials: true})
                    rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
                    .then((res)=>{
                        const { success } = res

                        if(success) {
                            navigation.navigate('home')
                        }else{
                            ToastAndroid.show('fingerprint incorrect', 200)
                        }
                    })

                }} style={styles.icon}>
                    <Image style={{height: '100%', width: '100%'}} source={require('../images/fingerprint.png')}/>
                </TouchableOpacity>
                }



        </View>
    )
}