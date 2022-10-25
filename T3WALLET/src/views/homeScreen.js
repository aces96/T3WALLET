import * as React from 'react';
import { useRef, useState } from 'react';
import { View, StyleSheet , Text, Animated, StatusBar} from 'react-native';
import { CredCard, InfoCard, SettingsSlide, HomeScreenTopBar } from '../components/homeScreen.components';
import SystemNavigationBar from 'react-native-system-navigation-bar';




export const Home = ()=>{

    SystemNavigationBar.navigationHide();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const [FadeIn, setFadeIn] = useState(false)

    const styles = StyleSheet.create({
        container: {
            height: '100%',
            width: '100%',
            backgroundColor: '#FFFFFF',
        },

    })



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
        <View  style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <HomeScreenTopBar FadeIn={FadeIn} handleClick={()=>{
                if(!FadeIn){
                    fadeIn()
                    setFadeIn(true)
                }else if(FadeIn){
                    fadeOut()
                    setFadeIn(false)
                }
            }} />
            <InfoCard />
                <View style={{height: 200,width: '90%', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <View style={{height: '40%', width: '100%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around'}}>
                        <CredCard title={'PHYGITAL'} />
                        <CredCard title={'DIGITAL'}/>
                    </View>

                    <View style={{height: '40%', width: '100%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around'}}>
                        <CredCard title={'BADGE'} />
                        <CredCard title={'PROFIL'}/>
                    </View>

                </View>

            <SettingsSlide fadeAnim={fadeAnim}/>
        </View>
    )
}