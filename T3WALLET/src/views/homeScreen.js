import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import { View, StyleSheet , Text, Animated, StatusBar, DrawerLayoutAndroid} from 'react-native';
import { CredCard, InfoCard, SettingsSlide, HomeScreenTopBar, HomeSideBar, HomePlusAnimatedView } from '../components/homeScreen.components';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { PieCharts } from '../components/charts.components';




export const Home = ()=>{

    const drawer = useRef(null)

    const navigation = useNavigation()
    SystemNavigationBar.navigationHide();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const sideBarWidth = useRef(new Animated.Value(0)).current;

    const [FadeIn, setFadeIn] = useState(false)
    const [drawerPosition, setDrawerPosition] = useState("left")

    const styles = StyleSheet.create({
        container: {
            height: '100%',
            width: '100%',
            backgroundColor: '#FFFFFF',
        },

    })

    const changeDrawerPosition = () => {
        if (drawerPosition === "left") {
          setDrawerPosition("right");
        } else {
          setDrawerPosition("left");
        }
      };

    // useFocusEffect()



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

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
          <Text style={styles.paragraph}>I'm in the Drawer!</Text>

        </View>
      );

      return (
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={250}
                drawerPosition={drawerPosition}
                renderNavigationView={navigationView}
            >
                <View  style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>

            <HomePlusAnimatedView />
            <HomeScreenTopBar handlePress={()=>{
                drawer.current.openDrawer()
            }} handleSideBar={showSideBar} FadeIn={FadeIn} handleClick={()=>{
                navigation.navigate('settings')
            }} />
            <HomeSideBar handleSideBarBack={hideSideBar} width={sideBarWidth} />
            <SettingsSlide fadeAnim={fadeAnim}/>
            <InfoCard />
                </View>

            </DrawerLayoutAndroid>
    )
}