import * as React from 'react';
import { useRef } from 'react';
import { View , StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export const InfoCard = (props)=>{

    const styles = StyleSheet.create({
        container: {
            height: 250,
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 40,
            marginTop: 5,
            borderWidth: 1,
            borderColor: 'black',
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
        }
    })
    return (
        <View style={styles.container}>
            <Text style={{color: 'black', marginLeft: 20, marginTop: 10, fontSize: 15}}>
                UM6P BENGUERIR
            </Text>

            <Text style={{ marginLeft: 20,marginTop: 10, fontSize: 18, fontWeight: '600', color: 'black'}}>
            Credentiels: 1000

            </Text>



            <View style={{width: '100%', height: 65, flexDirection: 'row', marginTop: 15}}>
                <View style={{width: '33%', height: '100%',borderRightWidth: 1, borderColor: 'black', alignItems: 'center',}}>
                    <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                        Phygital
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: 'black'}}>
                        500
                    </Text>
                </View>
                <View style={{width: '34%', height: '100%', borderColor: 'black', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                        Digital
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: 'black'}}>
                        250
                    </Text>
                </View>
                <View style={{width: '33%', height: '100%',borderLeftWidth: 1, borderColor: 'black', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                        Badge
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10, color: 'black'}}>
                        250
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=>props.handleClick()} style={styles.button}>
                <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>Demande</Text>
            </TouchableOpacity>

        </View>
    )
}

export const CredCard = (props)=>{

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            height: 160,
            alignSelf: 'center',
            borderRadius: 10, 
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title:{
            fontSize: 22,
            color: 'black',
            fontWeight: '600',
            letterSpacing: 5
        }
    })

    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ 'rgb(183, 209, 215)', 'rgb(178, 208, 215)',]} style={{width: '90%', height: 160, alignSelf: 'center',borderRadius: 10,marginBottom: 10,justifyContent: 'center', alignItems: 'center', elevation: 15, borderWidth: 1, borderColor: 'transparent'}}>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
        </LinearGradient>

    )
}


export const SlideAppView = (props)=>{




    return (
        <Animated.View style={{height: props.fadeAnim, width: '100%', position: 'absolute', bottom: 0, borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: 'black'}}>
            
        </Animated.View>
    )
}