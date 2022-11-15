import React from 'react';
import { useState, useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { View, StyleSheet, Animated,Text, TouchableOpacity, StatusBar } from 'react-native';
import CertifIllustration from '../images/certifIllustration.svg'
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Logo from '../images/logo/logo.svg'





export const OnBoarding = ()=>{

    SystemNavigationBar.navigationHide()

    const [SlideIsUp, setSlideIsUp] = useState(false)
    const navigation = useNavigation()

    const SlideHeight = useRef(new Animated.Value(0)).current

    const slideDown = ()=>{
        Animated.timing(SlideHeight, {
            toValue: 860,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }

    const slideUp = ()=>{
        Animated.timing(SlideHeight,{
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        }).start()
    }

    useFocusEffect(
        useCallback(()=>{
            slideDown()
        },[])
    )


    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        },
        illustrationView: {
            width: '60%',
            height: 230,
            alignSelf: 'center',
            
        },
        button: {
            width: '90%',
            height: 60,
            borderRadius: 20,
            backgroundColor: 'rgba(255,255,255,0.4)',
            borderWidth: 1,
            borderColor: 'white',
            position: 'absolute',
            bottom: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={'transparent'} />
            <Animated.View style={{width: '100%', height: SlideHeight, backgroundColor: 'rgba(36,161,156,0.8)', borderBottomLeftRadius: 60, borderBottomRightRadius: 60, position: 'absolute', zIndex: 10}}>
                    <Text style={{fontFamily: 'Roboto-Medium', color: 'white', fontSize: 25, textAlign: 'center', margin: 100}}>Lorem ipsum</Text>

                    <View style={{width: '100%', height: 300, position: 'absolute', bottom: 350, alignSelf: 'center', alignItems: 'center', paddingLeft: 15, paddingRight: 15, justifyContent: 'space-around'}}>
                        <CertifIllustration style={{marginBottom: 80}}  width={250} height={250}/> 
                        <Text style={{fontFamily: 'Roboto-Medium', fontSize: 16, textAlign: 'center', color: 'white'}}>
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, 
                        </Text>
                    </View>

                    <TouchableOpacity onPress={()=>{
                        setSlideIsUp(true)
                        slideUp()
                        setTimeout(()=>{
                            navigation.navigate('home')
                        }, 1000)
                    }} style={styles.button}>
                        <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium', color: 'white'}}>
                            Continuer
                        </Text>
                    </TouchableOpacity>
            </Animated.View>

            {SlideIsUp && 
                <Logo style={{alignSelf: 'center', marginTop: 250, height: 150, width: 150}}/>
            }
        </View>
    )
}