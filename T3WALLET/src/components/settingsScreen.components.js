import * as React from 'react';
import { useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, Animated, TextInput } from 'react-native';
import BackSvg from '../images/backSvg.svg'
import UpSvg from '../images/upSvg.svg'
import DownSvg from '../images/downSvg.svg'



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
            flexDirection: 'row'
        },
        imageView: {
            width: 90,
            height: 90,
            borderRadius: 45,
            borderWidth: 1,
            marginTop: 12
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

                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={{color: 'white', fontSize: 15}}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>

                </View>
            }


        </Animated.View>
    )
}