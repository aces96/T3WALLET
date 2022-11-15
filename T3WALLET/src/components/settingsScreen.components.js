import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Animated, TextInput, Switch, ScrollView } from 'react-native';
import BackSvg from '../images/backSvg.svg'
import UpSvg from '../images/upSvg.svg'
import DownSvg from '../images/downSvg.svg'
import { storeFingerPrintEnabled, getFingerPrintEnabled, removeFingerPrintEnabled } from '../storage/storage';
import { useFocusEffect } from '@react-navigation/native';
import LogoutSvg from '../images/logoutSvg2'
import { useNavigation } from '@react-navigation/native';
import NavigationSvg from '../images/navigateSvg.svg'
import ArrowSvg from '../images/rightArrowSvg.svg'



export const ProfilInfoCard = ()=>{


    const navigation = useNavigation()


    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 230,
            backgroundColor: 'white'
        },
        backButtonView: {
            width: '100%',
            height: '50%',
            backgroundColor: '#24A19C',
            justifyContent: 'flex-end'
        },
        text:{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            color: 'white',
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
            borderColor: 'rgba(0,0,0,0.6)',
        },
        imageView: {
            width: 90,
            height: 90,
            borderRadius: 45,
            borderWidth: 1,
            marginTop: 12,
            borderColor: '#24A19C',
        },
        OraganisationInfoView:{
            width: 305,
            height: '100%',
            backgroundColor: 'white',
        }
    })


    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <View style={styles.backButtonView}>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack()
                }}  style={styles.backButton}>
                    <BackSvg width='100%' height='100%' fill= 'white' />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Profil
                </Text>
            </View>

            <View style={styles.card}>
                <View style={styles.OraganisationInfoView}>
                    <Text style={{fontFamily: 'Roboto-Medium', fontSize: 20, color: 'black', marginTop: 20}}>
                        Organisation:
                    </Text>


                    <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14, color: '#24A19C'}}>
                        L’Université mohammed VI polytechnique
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

            <Text style={{fontFamily: 'Roboto-Medium', color: 'black', fontSize: 20, marginLeft: 15, marginTop: 10}}>
                Reset password
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


    const styles = StyleSheet.create({
        container: {
            width: '95%',
            height: 70,
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
                Enable fingerPrint authentication
            </Text>


        </View>
    )
}


export const LogOutButton = ()=>{
    
    const styles = StyleSheet.create({
        button: {
            width: '95%',
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


export const SupportButton = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '95%',
            height: 70,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#24A19C',
            elevation: 4,
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 20
        },
        iconView: {
            width: 35,
            height: 35,
            position: 'absolute',
            right: 10,
            top: 18
        }
    })

    
    return (

        <TouchableOpacity activeOpacity={0.8} style={styles.container}>
            
            <Text style={{fontFamily: 'Oswald-Medium', color: 'black', fontSize: 20, marginLeft: 15, marginTop: 10}}>
                Support
            </Text>

            <View style={styles.iconView}>
                <NavigationSvg width={'100%'} height={'100%'} fill={'#24A19C'}/>
            </View>
        </TouchableOpacity>

    )
}



export const SettingsList = ()=>{

    const [enabled, setEnabled] = useState()
    const navigation = useNavigation()




    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },
        resetPassView: {
            width: '95%',
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 20,
            paddingLeft: 10,
            marginTop: 5,
            borderRadius: 10,
            alignSelf: 'center',
            backgroundColor: 'white',
            alignSelf: 'center',
            elevation: 5
        }
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






    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('resetPassword')} style={styles.resetPassView}>
                <Text style={{fontSize: 18, color: 'black', fontFamily: 'Roboto-Medium', letterSpacing: 1}}> Reset password</Text>
                <View style={{width: 35, height: 35, borderWidth: 1, borderRadius: 35/2, justifyContent: 'center', alignItems: 'center', paddingLeft: 5, backgroundColor: 'rgba(0,0,0,0.1)'}} >
                    <ArrowSvg width={20} height={20} fill={'rgba(0,0,0,0.3)'}/>
                </View>
            </TouchableOpacity>

            <View style={styles.resetPassView}>
                <Text style={{fontSize: 18, color: 'black', fontFamily: 'Roboto-Medium', letterSpacing: 1}}>Analytics</Text>
                <View style={{width: 35, height: 35, borderWidth: 1, borderRadius: 35/2, justifyContent: 'center', alignItems: 'center', paddingLeft: 5, backgroundColor: 'rgba(0,0,0,0.1)'}} >
                    <ArrowSvg width={20} height={20} fill={'rgba(0,0,0,0.3)'}/>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('support')} style={styles.resetPassView}>
                <Text style={{fontSize: 18, color: 'black', fontFamily: 'Roboto-Medium', letterSpacing: 1}}>Contact support</Text>
                <View style={{width: 35, height: 35, borderWidth: 1, borderRadius: 35/2, justifyContent: 'center', alignItems: 'center', paddingLeft: 5, backgroundColor: 'rgba(0,0,0,0.1)'}} >
                    <ArrowSvg width={20} height={20} fill={'rgba(0,0,0,0.3)'}/>
                </View>
            </TouchableOpacity>

            <View style={styles.resetPassView}>
                <Text style={{fontSize: 18, color: 'black', fontFamily: 'Roboto-Medium', letterSpacing: 1}}>fingerprint login</Text>
                <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}} >
                <Switch onValueChange={async (e)=>{
                    setEnabled(!enabled)
                    await storeFingerPrintEnabled(e.toString())
                    }} value={enabled} trackColor={{ false: "#767577", true: '#24A19C' }} style={{transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}/>
                </View>
            </View>
        </ScrollView>
    )
}