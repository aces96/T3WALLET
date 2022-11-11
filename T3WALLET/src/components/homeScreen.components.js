import * as React from 'react';
import { useRef, useState } from 'react';
import { View , StyleSheet, Text, TouchableOpacity, Animated, Image} from 'react-native';
import { EditImageSection, SettingsInputs } from './settings.components';
import { BlurView } from "@react-native-community/blur";
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import {BADGE, PHYGITAL, DIGITAL} from '../fakeData.js/fakeData';
import { useDispatch } from 'react-redux';
import { updateCredentiels, updateType } from '../redux/credentielsData';
import PlusSvg from '../images/plusSvg2'
import CancelSvg from '../images/cancelSvg'
import { PieCharts } from './charts.components';
import BurgerSvg from '../images/burgerSvg.svg'
import SettingsSvg from '../images/settingsSvg.svg'
import StatsSvg from '../images/statsSvg.svg'
import CertifSvg from '../images/certifSvg.svg'





export const InfoCard = (props)=>{


    const navigation = useNavigation()
    const dispatch = useDispatch()


    const styles = StyleSheet.create({
        container: {
            height: 600,
            width: '100%',
            backgroundColor: '#24A19C',
            alignSelf: 'center',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
        },
        card: {
            width: '95%',
            height: '82%',
            backgroundColor: 'white',
            alignSelf: 'center',
            marginTop: 10,
            borderBottomLeftRadius: 34,
            borderBottomRightRadius: 34,

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
        },
        itemView: {
            width: '93%',
            height: 80,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: -38,
            alignSelf: 'center'
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <View style={{height: 80, width: '100%'}}>
                <Text style={{ marginLeft: 20,marginTop: 10, fontSize: 18, fontWeight: '600', color: 'black', marginBottom: 5}}>
                    Organisation:
                </Text>
                <Text style={{ marginLeft: 20,marginTop: 5, fontSize: 15, fontWeight: '400', color: '#24A19C', marginBottom: 20}}>
                    L’Université mohammed VI polytechnique
                </Text>

            </View>
            <View style= {{width: 170, height: 100, borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(36,161,156,0.3)', alignSelf: 'center', marginTop: 80, borderRadius: 15, overflow: 'hidden', marginBottom: 20, elevation: 15, shadowColor: 'rgba(36,161,156,0.9)'}}>
                <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={15}
                reducedTransparencyFallbackColor= '#24A19C'
                />
                <Text style={{fontSize: 22, fontWeight: '300', color: 'black'}}>
                    Total balance:
                </Text>
                <Text style={{fontSize: 22, fontWeight: '500', color: '#24A19C'}}>
                    1000
                </Text>
            </View>

            <View style={{width: '90%', height: 80, backgroundColor: 'white', marginTop: 40, justifyContent: 'space-around', flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity onPress={()=>{
                    dispatch(updateCredentiels(PHYGITAL))
                    dispatch(updateType('phygital'))
                    navigation.navigate('dataTable')
                    }} style={{width: '28%',height: '100%', backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center', borderColor: '#24A19C', borderWidth: 2, shadowColor: '#24A19C', elevation: 15}}>
                    <CertifSvg width={35} height={35} fill={'#24A19C'}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('charts')} style={{width: '28%',height: '100%', backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center', borderColor: '#24A19C', borderWidth: 2, shadowColor: '#24A19C', elevation: 15}}>
                    <StatsSvg width={35} height={35} fill={'#24A19C'}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate('settings')} style={{width: '25%',height: '100%', backgroundColor: 'white', borderRadius: 30, justifyContent: 'center', alignItems: 'center', borderColor: '#24A19C', borderWidth: 2, shadowColor: '#24A19C', elevation: 15}}>
                    <SettingsSvg width={35} height={35} fill={'#24A19C'} />
                </TouchableOpacity>

            </View>
            <View style={styles.itemView}>
                <View style={{width: '30%', height: '100%', backgroundColor: '#24A19C', borderRadius: 20}}>
                    <View style={{width: '100%', height: '50%', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderColor: 'white', justifyContent: 'center', borderBottomWidth: 2}}>
                        <Text style={{fontFamily: 'Oswald-Medium', color: 'white', textAlign:'center'}}>PHYGITAL</Text>
                    </View>

                    <View style={{width: '100%', height: '50%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: 'white', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Oswald-Medium', color: 'white', textAlign:'center', fontSize: 17}}>500</Text>
                    </View>
                </View>



                <View style={{width: '30%', height: '100%', backgroundColor: '#24A19C', borderRadius: 20}}>
                    <View style={{width: '100%', height: '50%', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderColor: 'white', borderBottomWidth: 2, justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Oswald-Medium', color: 'white', textAlign:'center'}}>DIGITAL</Text>
                    </View>

                    <View style={{width: '100%', height: '50%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: 'white', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Oswald-Medium', color: 'white', textAlign:'center', fontSize: 17}}>250</Text>
                    </View>
                </View>



                <View style={{width: '30%', height: '100%', backgroundColor: '#24A19C', borderRadius: 20}}>
                    <View style={{width: '100%', height: '50%', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth: 2, borderColor: 'white', borderBottomWidth: 2, justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Oswald-Medium', color: 'white', textAlign:'center'}}>BADGE</Text>
                    </View>

                    <View style={{width: '100%', height: '50%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderLeftWidth: 2, borderRightWidth: 2, borderBottomWidth: 2, borderColor: 'white', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Oswald-Medium', color: 'white', textAlign:'center', fontSize: 17}}>250</Text>
                    </View>
                </View>
            </View>

            </View>

        </View>
    )
}


export const CredCard = (props)=>{

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const styles = StyleSheet.create({
        container: {
            width: 150,
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
            fontSize: 15,
            color: '#EAEAEA',
            fontWeight: '600',
            letterSpacing: 4,
            
        }
    })

    return (
        
            <TouchableOpacity onPress={()=>{
                if(props.title == 'PHYGITAL') {
                dispatch(updateCredentiels(PHYGITAL))
                dispatch(updateType('phygital'))
                navigation.navigate('dataTable')
                
            }else if(props.title == 'DIGITAL'){
                dispatch(updateCredentiels(DIGITAL))
                dispatch(updateType('digital'))
                navigation.navigate('dataTable')
            }else if(props.title == 'BADGE'){
                dispatch(updateCredentiels(BADGE))
                dispatch(updateType('digital'))
                navigation.navigate('dataTable')
            }else {
                dispatch(updateCredentiels(PHYGITAL))
                navigation.navigate('dataTable')
            }
            }} style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>

    )
}


export const SettingsSlide = (props)=>{



    return (
        <Animated.View style={{height: props.fadeAnim, width: '100%', position: 'absolute', bottom: 0, borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: 'white', borderColor: 'rgba(36,161,156,0.4)', borderWidth: 2, zIndex: 100}}>
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
            width: '100%',
            height: '100%',
            borderRadius: 20,
        },
        imageView: {
            width: 30,
            height: 30,
            marginTop: 50,
            marginLeft: 13,
            marginBottom: 10
        },
    })

    return (
        <View style={styles.container}>
            
        </View>
    )
}


export const HomeSideBar = (props)=>{

    const styles= StyleSheet.create({
        container: {
            height: '100%',
            backgroundColor: '#24A19C',
            position: 'absolute',
            left: 0,
            zIndex: 200,
            borderRightWidth: 1,
            borderColor: 'white'
        },
        backButtonView: {
            width: '100%',
            height: 50,
            marginTop: 40,
        },
        backButton: {
            width: 30,
            height: 30,
            position: 'absolute',
            right: 10
        },
        backIcon:  {
            width: '100%',
            height: '100%'
        },
        buttons: {
            width: '100%',
            height: 60,
            backgroundColor: 'rgba(255,255,255,0.6)',
            marginBottom: 10,
            borderRadius: 15,
        },
        deconnectButton: {
            width: '100%',
            height: 60,
            backgroundColor: 'rgba(204,2,2, 0.9)',
            position: 'absolute',
            bottom: 30,
            borderRadius: 20
    }
    })


    return (
        <Animated.View style={{...styles.container, width: props.width}}>
            <View style={styles.backButtonView}>
                <TouchableOpacity onPress={()=> props.handleSideBarBack()} style={styles.backButton}>
                    <Image style={styles.backIcon} source={require('../images/back.png')}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttons}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.deconnectButton}>

            </TouchableOpacity>
        </Animated.View>
    )
}

export const HomePlusAnimatedView = ()=>{

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [expanded, setExpanded] = useState(false)

    const AnimatedDimensions = useRef(new Animated.Value(70)).current;

    const expandView = ()=>{
        Animated.timing(AnimatedDimensions, {
            toValue: 300,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    const shrinkView = ()=>{
        Animated.timing(AnimatedDimensions, {
            toValue: 70,
            duration: 300,
            useNativeDriver: false
        }).start()
    }



    const style = StyleSheet.create({
        container: {
            alignSelf: 'center',
            position: 'absolute',
            bottom: 50,
            backgroundColor:'white',
            borderRadius: 35,
            zIndex: 50,
            borderWidth: 2,
            borderColor: 'rgba(36,161,156,1)',
            elevation: 10
        },
        iconButton: {
            width: 35,
            height: 35,
            position: 'absolute',
            bottom: 17,
            alignSelf: 'center',
        },
        buttonsContainer: {
            height: '76%',
            width: '100%',
            justifyContent: 'space-around',
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            marginTop: 5
        },
        buttons: {
            width: '82%',
            height: '28%',
            alignSelf: 'center',
            backgroundColor: 'rgba(36,161,156,0.5)',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'rgba(36,161,156,1)',
            justifyContent: 'center'
        },
        text: {
            fontFamily: 'Oswald-Medium',
            color: 'white',
            textAlign: 'center',
            fontSize: 18
        }
    })

    return (
            <Animated.View style={{...style.container,width: AnimatedDimensions, height: AnimatedDimensions}}>

                {expanded &&
                <View style={style.buttonsContainer}>
                    <TouchableOpacity onPress={()=>{
                        dispatch(updateCredentiels(PHYGITAL))
                        dispatch(updateType('phygital'))
                        navigation.navigate('dataTable')
                    }} style={style.buttons}>
                        <Text style={style.text}>
                            PHYGITAL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        dispatch(updateCredentiels(DIGITAL))
                        dispatch(updateType('digital'))
                        navigation.navigate('dataTable')
                    }} style={style.buttons}>
                        <Text style={style.text}>
                                DIGITAL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        dispatch(updateCredentiels(BADGE))
                        dispatch(updateType('badge'))
                        navigation.navigate('dataTable')
                    }} style={style.buttons}>
                        <Text style={style.text}>
                                BADGE
                        </Text>
                    </TouchableOpacity>
                </View>
                }


                <TouchableOpacity onPress={()=>{
                    if(expanded){
                        setExpanded(false)
                        shrinkView()
                    }else {
                        setExpanded(true)
                        expandView()
                    }
                }}  style={style.iconButton}>
                    {expanded ? <CancelSvg width= '100%' height='100%' fill='rgba(36,161,156,1)'/> : <PlusSvg width= '100%' height='100%' fill='rgba(36,161,156,1)' />}
                </TouchableOpacity>
            </Animated.View>
    )
}


















{/* <View style={{width: '100%', height: '75%', backgroundColor: 'white', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>




</View>

<View style={{width: '100%', height: 50, flexDirection: 'row', position: 'absolute', bottom: 30}}>
<View style={{width: '33%', height: '100%',borderRightWidth: 2, borderColor: 'white', alignItems: 'center',}}>
    <Text style={{fontSize: 15, fontWeight: '600', color: 'white'}}>
        Phygital
    </Text>
    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: 'white'}}>
        500
    </Text>
</View>
<View style={{width: '34%', height: '100%', borderColor: 'white', alignItems: 'center'}}>
    <Text style={{fontSize: 15, fontWeight: '600', color: 'white'}}>
        Digital
    </Text>
    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: 'white'}}>
        250
    </Text>
</View>
<View style={{width: '33%', height: '100%',borderLeftWidth: 2, borderColor: 'white', alignItems: 'center'}}>
    <Text style={{fontSize: 15, fontWeight: '600', color: 'white'}}>
        Badge
    </Text>
    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: 'white'}}>
        250
    </Text>
</View>
</View> */}