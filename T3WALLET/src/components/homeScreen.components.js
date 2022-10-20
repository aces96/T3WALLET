import * as React from 'react';
import { useRef } from 'react';
import { View , StyleSheet, Text, TouchableOpacity, Animated, Image} from 'react-native';
import { EditImageSection, SettingsInputs } from './settings.components';
import { BlurView } from "@react-native-community/blur";




export const InfoCard = (props)=>{

    const styles = StyleSheet.create({
        container: {
            height: 450,
            width: '95%',
            backgroundColor: 'transparent',
            borderRadius: 40,
            marginTop: 30,
            alignSelf: 'center'
        },
        button: {
            width: '90%', 
            height: 50,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'black',
            alignSelf: 'center',
            marginTop: 25,
            justifyContent: 'center',
            alignItems: 'center'
        },
        absolute: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            borderRadius: 20
        }
    })
    return (
        <View style={styles.container}>

            <View style={{height: 80, width: '100%'}}>
                <Text style={{ marginLeft: 20,marginTop: 10, fontSize: 18, fontWeight: '600', color: 'black', marginBottom: 5}}>
                    Organisation:
                </Text>
                <Text style={{ marginLeft: 20,marginTop: 5, fontSize: 15, fontWeight: '400', color: '#24A19C', marginBottom: 20}}>
                    L’Université Mohammed VI Polytechnique
                </Text>

            </View>


            <View style= {{width: 170, height: 120, borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(36,161,156,0.3)', alignSelf: 'center', marginTop: 40, borderRadius: 15, overflow: 'hidden'}}>
                <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={15}
                reducedTransparencyFallbackColor= '#24A19C'
                />
            <Text style={{fontSize: 22, fontWeight: '300', color: 'black'}}>
                Total Balance:
            </Text>
            <Text style={{fontSize: 22, fontWeight: '500', color: '#24A19C'}}>
                1000
            </Text>
            </View>

            <View style={{width: '100%', height: 65, flexDirection: 'row', marginTop: 15, position: 'absolute', bottom: 50}}>
                <View style={{width: '33%', height: '100%',borderRightWidth: 2, borderColor: '#24A19C', alignItems: 'center',}}>
                    <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                        Phygital
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: '#24A19C'}}>
                        500
                    </Text>
                </View>
                <View style={{width: '34%', height: '100%', borderColor: 'black', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                        Digital
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: '#24A19C'}}>
                        250
                    </Text>
                </View>
                <View style={{width: '33%', height: '100%',borderLeftWidth: 2, borderColor: '#24A19C', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                        Badge
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: '#24A19C'}}>
                        250
                    </Text>
                </View>
            </View>
            {/* <TouchableOpacity onPress={()=>props.handleClick()} style={styles.button}>
                <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>Demande</Text>
            </TouchableOpacity> */}
        </View>
    )
}


export const CredCard = (props)=>{

    const styles = StyleSheet.create({
        container: {
            width: 110,
            height: 80,
            alignSelf: 'center',
            borderRadius: 20, 
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#24A19C',
            elevation: 10
        },
        title:{
            fontSize: 13,
            color: '#EAEAEA',
            fontWeight: '400',
            letterSpacing: 4,
            
        }
    })

    return (
        
            <TouchableOpacity style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>

    )
}


export const SettingsSlide = (props)=>{



    return (
        <Animated.View style={{height: props.fadeAnim, width: '100%', position: 'absolute', bottom: 0, borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: 'white', borderColor: 'rgba(36,161,156,0.4)', borderWidth: 2}}>
            <Text style={{fontSize: 24, fontWeight: '700', textAlign: 'center', color: 'black', marginBottom: 20, marginTop: 10}}>
                Settings
            </Text>
            <EditImageSection />
            <SettingsInputs />
            
            
        </Animated.View>
    )
}


export const HomeScreenTopBar = (props)=>{

    const styles = StyleSheet.create({

        container: {
            width: '100%',
            height: 80,
            backgroundColor: '#24A19C',
            justifyContent: 'flex-end',
        },
        image: {
            width: 40,
            height: 40,
            borderRadius: 20,
            marginLeft: 10,
            marginBottom: 10
        }
    })

    return (
        <View style={styles.container}>
            <View style={{width: 30, height: 30, position: 'absolute', right: 10, bottom: 10}}>
            <TouchableOpacity onPress={()=>{
                props.handleClick()
            }} style={{height: 30, width: 30}}>

                <Image style={{width: 30, height: 30, alignSelf: 'flex-end'}} source={props.FadeIn ? require('../images/cancel3.png') : require('../images/setting.png')}/>
            </TouchableOpacity>
            </View>
            <Image style={styles.image} source={require('../images/noImage.png')}/>
        </View>
    )
}