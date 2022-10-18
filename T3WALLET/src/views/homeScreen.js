import * as React from 'react';
import { useRef, useState } from 'react';
import { View, StyleSheet , Text, Animated, ScrollView, Image} from 'react-native';
import { CredCard, InfoCard, SettingsSlide } from '../components/homeScreen.components';




export const Home = ()=>{

    const [FadeIn, setFadeIn] = useState(false)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#3C4048',
        }
    })

    const fadeAnim = useRef(new Animated.Value(0)).current;


    const fadeIn = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 540,
            duration: 400,
            useNativeDriver: false
        }).start()
    }
    const fadeOut = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false
        }).start();
    }

    return (
        <ScrollView  style={styles.container}>
            <InfoCard handleClick={()=>{
                if(!FadeIn){
                    fadeIn()
                    setFadeIn(true)
                }else if(FadeIn){
                    fadeOut()
                    setFadeIn(false)
                }
            }}/>
                <View style={{height: 350, width: '95%', backgroundColor: '#EAEAEA', alignSelf: 'center', borderTopLeftRadius: 30, borderTopRightRadius: 40}}>
                <Text style={{fontSize: 20, color: 'black', textAlign: 'left', marginLeft: 20, marginTop: 10, marginBottom: 20, fontWeight: '700'}}>
                Credentiels:
                </Text>
                <CredCard title={'PHYGITAL'} />
                <CredCard title={'DIGITAL'}/>
                <CredCard title={'BADGE'}/>
                </View>
            <SettingsSlide fadeAnim={fadeAnim}/>
        </ScrollView>
    )
}