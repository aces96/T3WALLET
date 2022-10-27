import * as React from 'react';
import { useRef, useState } from 'react';
import { View, StyleSheet , Text, Animated, StatusBar} from 'react-native';
import { CredCard, InfoCard, SettingsSlide, HomeScreenTopBar, HomeSideBar, HomePlusAnimatedView } from '../components/homeScreen.components';
import SystemNavigationBar from 'react-native-system-navigation-bar';




export const Home = ()=>{

    SystemNavigationBar.navigationHide();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const sideBarWidth = useRef(new Animated.Value(0)).current;

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

    const showSideBar = ()=>{
        Animated.timing(sideBarWidth, {
            toValue: 280,
            duration: 400,
            useNativeDriver: false
        }).start()
    }

    const hideSideBar = ()=>{
        Animated.timing(sideBarWidth, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false
        }).start()
    }

    return (
        <View  style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <HomePlusAnimatedView />
            <HomeScreenTopBar handleSideBar={showSideBar} FadeIn={FadeIn} handleClick={()=>{
                if(!FadeIn){
                    fadeIn()
                    setFadeIn(true)
                }else if(FadeIn){
                    fadeOut()
                    setFadeIn(false)
                }
            }} />
                <HomeSideBar handleSideBarBack={hideSideBar} width={sideBarWidth} />
                <SettingsSlide fadeAnim={fadeAnim}/>
                <InfoCard />



        </View>
    )
}