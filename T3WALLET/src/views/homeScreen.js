import * as React from 'react';
import { useRef } from 'react';
import { View, StyleSheet , Text, Animated, Dimensions} from 'react-native';
import { CredCard, InfoCard, SlideAppView } from '../components/homeScreen.components';




export const Home = ()=>{

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        }
    })

    const fadeAnim = useRef(new Animated.Value(0)).current;


    const fadeIn = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 800,
            duration: 400,
            useNativeDriver: false
        }).start()
    }
    const fadeOut = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000
        }).start();
    }

    return (
        <View style={styles.container}>
            <InfoCard handleClick={fadeIn}/>
            <Text style={{fontSize: 20, color: 'black', textAlign: 'left', marginLeft: 10, marginTop: 10, marginBottom: 20, fontWeight: '600'}}>
                Credentiels:
            </Text>
            <CredCard title={'PHYGITAL'} />
            <CredCard title={'DIGITAL'}/>
            <CredCard title={'BADGE'}/>
            <SlideAppView fadeAnim={fadeAnim}/>
        </View>
    )
}