import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, Animated, TextInput, Switch } from 'react-native';
import BackSvg from '../images/backSvg.svg'
import UpSvg from '../images/upSvg.svg'
import DownSvg from '../images/downSvg.svg'
import { storeFingerPrintEnabled, getFingerPrintEnabled, removeFingerPrintEnabled } from '../storage/storage';
import { useFocusEffect } from '@react-navigation/native';
import LogoutSvg from '../images/logoutSvg2'
import { useNavigation } from '@react-navigation/native';



export const ProfilInfoCard = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 230,
            backgroundColor: 'white'
        },
        backButtonView: {
            width: '100%',
            height: '50%',
            backgroundColor: 'white',
            justifyContent: 'flex-end'
        },
        text:{
            fontFamily: 'Oswald-Medium',
            fontSize: 28,
            color: 'black',
            textAlign: 'center',
            marginBottom: 15
        },
        backButton: {
            width: 35,
            height: 35,
            position: 'absolute',
            bottom: 15,
            left: 10,
            zIndex: 10
        },
        card: {
            width: '100%',
            height: '50%',
            backgroundColor: 'white',
            justifyContent: 'center',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            elevation: 3,
            flexDirection: 'row',
            borderColor: '#24A19C',
        },
        imageView: {
            width: 90,
            height: 90,
            borderRadius: 45,
            borderWidth: 1,
            marginTop: 12,
            borderColor: '#24A19C',
        },
        OraganisationInfoView: {
            width: 305,
            height: '100%',
            backgroundColor: 'white',
        }
    })

    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <View style={styles.backButtonView}>
                <TouchableOpacity style={styles.backButton}>
                    <BackSvg width='100%' height='100%' fill='black' />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Profil
                </Text>
            </View>

            <View style={styles.card}>
                <View style={styles.imageView}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 50}} source={require('../images/noImage.png')}/>
                </View>

                <View style={styles.OraganisationInfoView}>
                    <Text style={{fontFamily: 'Oswald-Medium', fontSize: 20, color: 'black',marginLeft: 20, marginTop: 20}}>
                        Organisation:
                    </Text>

                    <Text style={{fontFamily: 'Oswald-Light', fontSize: 15, color: '#24A19C', marginLeft: 20}}>
                        L’Université Mohammed VI Polytechnique
                    </Text>

                </View>
            </View>
        </View>
    )
}


export const ResetPasswordCard = ()=>{


    const navigation = useNavigation()

    const [expanded, setExpanded] = useState(false)
    const [email, setEmail] = useState('')
    
    const styles = StyleSheet.create({
        container: {
            width: '95%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#24A19C',
            elevation: 4,
            backgroundColor: 'white',
            borderRadius: 10
        },
        button: {
            width: 40,
            height: 40,
            position: 'absolute',
            right: 10,
            top: 10
        },
        inputView: {
            width: '95%',
            height: '75%',
            alignSelf: 'center',
            backgroundColor: 'white',
            marginTop: 20
        },
        input: {
            width: '100%',
            height: 70,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#24A19C',
            marginTop: 15,
            paddingLeft: 10,
            color: 'black'
        },
        submitButton: {
            width: '90%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(36,161,156,0.6)',
            marginTop: 20,
            alignSelf: 'center',
            borderRadius: 15
        }
    })

    const initialHeight = useRef(new Animated.Value(100)).current;

    const expandCard = ()=>{
        Animated.timing(initialHeight, {
            toValue: 300,
            duration: 300,
            useNativeDriver: false
        }).start()
    }


    const shrinkCard = ()=>{
        Animated.timing(initialHeight, {
            toValue: 100,
            duration: 300,
            useNativeDriver: false
        }).start()
    }


    return (
        <Animated.View style={{...styles.container, height: initialHeight}}>

            <Text style={{fontFamily: 'Oswald-Medium', color: 'black', fontSize: 20, marginLeft: 15, marginTop: 10}}>
                Reset Password
            </Text>
            <TouchableOpacity onPress={()=>{
                if(expanded){
                    shrinkCard()
                    setExpanded(false)
                }else {
                    expandCard()
                    setExpanded(true)
                }
            }} style={styles.button}>

                {expanded ? <UpSvg width='100%' height='100%' fill='#24A19C'/>  : <DownSvg width='100%' height='100%' fill='#24A19C'/> }


            </TouchableOpacity>

            {expanded && 
                <View style={styles.inputView}>
                    <Text style={{fontFamily: 'Oswald-Medium', color: 'rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 30}}>
                        Enter the email you use for login
                    </Text>

                    <TextInput onChangeText={(e)=>setEmail(e)} style={styles.input} placeholder='email@gmail.com' placeholderTextColor={'rgba(0,0,0,0.4)'} value={email}/>

                    <TouchableOpacity onPress={()=> navigation.navigate('resetPassword')} style={styles.submitButton}>
                        <Text style={{color: 'white', fontSize: 15}}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>

                </View>
            }


        </Animated.View>
    )
}



export const EnableFingerPrint = ()=>{

    const [enabled, setEnabled] = useState()

    const styles = StyleSheet.create({
        container: {
            width: '95%',
            height: 80,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#24A19C',
            elevation: 4,
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 20,
            justifyContent: 'center'
        },
    })


    const getFingerPrint = async ()=>{
        const fingerPrintEnabled =  await getFingerPrintEnabled()
        

        if (fingerPrintEnabled == null) {
            setEnabled(false)
        }else if(fingerPrintEnabled === 'false'){
            setEnabled(false)
        }else if(fingerPrintEnabled === 'true'){
            setEnabled(true)
        }
    }

    useFocusEffect(useCallback(()=>{

        getFingerPrint()



    },[])
    )


    // const handleSwitch = async ()=>{
        


    //         if (fingerPrintEnabled == null) {
    //             await storeFingerPrintEnabled(enabled.toString())
    //         }else {
    //             await removeFingerPrintEnabled()
    //             await storeFingerPrintEnabled(enabled.toString())
    //         }


    // }

    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'Oswald-Medium', color: 'black', fontSize: 20, marginLeft: 15}}>
                Enable FingerPrint Authentication
            </Text>

            <Switch onValueChange={async (e)=>{

                setEnabled(!enabled)
                await storeFingerPrintEnabled(e.toString())
            }} value={enabled} trackColor={{ false: "#767577", true: '#24A19C' }} style={{position: 'absolute', right: 10, top: 30}}/>
        </View>
    )
}


export const LogOutButton = ()=>{
    
    const styles = StyleSheet.create({
        button: {
            width: '90%',
            height: 60,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#CF142B',
            borderRadius: 15,
            justifyContent: 'center',
            elevation: 4,
            backgroundColor: 'white',
            shadowColor: '#CF142B',
            marginTop: 20
        },
        iconView: {
            width: 30,
            height: 30,
            position: 'absolute',
            right: 20,
            top : 19
        },
        text: {
            fontFamily: 'Oswald-Medium',
            color: '#CF142B',
            fontSize: 25,
            marginLeft: 20
        }
    })


    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Logout</Text>
            <View style={styles.iconView}>
                <LogoutSvg width='100%' height='100%' fill= '#CF142B' />
            </View>
        </TouchableOpacity>
    )
}


export const HelpCard = ()=>{
    const [expanded, setExpanded] = useState(false)

    const initialHeight = useRef(new Animated.Value(100)).current;


    const styles = StyleSheet.create({
        container: {
            width: '95%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#24A19C',
            elevation: 4,
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 20
        },
        button: {
            width: 40,
            height: 40,
            position: 'absolute',
            right: 10,
            top: 10
        },
    })



    const expandCard = ()=>{
        Animated.timing(initialHeight, {
            toValue: 250,
            duration: 300,
            useNativeDriver: false
        }).start()
    }


    const shrinkCard = ()=>{
        Animated.timing(initialHeight, {
            toValue: 100,
            duration: 300,
            useNativeDriver: false
        }).start()
    }


    return (
        <Animated.View style={{...styles.container, height: initialHeight}}>

            <Text style={{fontFamily: 'Oswald-Medium', color: 'black', fontSize: 20, marginLeft: 15, marginTop: 10, letterSpacing: 1}}>
                Help
            </Text>
            
            <TouchableOpacity onPress={()=>{
                if(expanded){
                    shrinkCard()
                    setExpanded(false)
                }else {
                    expandCard()
                    setExpanded(true)
                }
            }} style={styles.button}>

                {expanded ? <UpSvg width='100%' height='100%' fill='#24A19C'/>  : <DownSvg width='100%' height='100%' fill='#24A19C'/> }


            </TouchableOpacity>

        </Animated.View>
    )


}