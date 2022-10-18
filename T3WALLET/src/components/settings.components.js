import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';





export const EditImageSection = ()=>{


    const styles = StyleSheet.create({
        container: {
            height: 200,
            width: '100%',
            backgroundColor: '#EAEAEA'
        },
        image: {
            width: 120,
            height: 120,
            borderRadius: 60,
            alignSelf: 'center',
        },
        editImageText: {
            fontSize: 20,
            fontWeight: '500',
            textDecorationLine: 'underline' ,
            color: 'rgba(0,128,255, 0.4)' ,
            position: 'absolute' ,
            top: 140 ,
            left: 130 ,
        }
    })

    return (
        <View style={styles.container}>
            <Image  source={require('../images/noImage.png')} style={styles.image}/>
            <Text style={styles.editImageText}>
                Upload image
            </Text>
        </View>
    )
}

export const SettingsInputs = ()=>{

    const [organisationName, setOrganisationName] = useState('L’Université Mohammed VI Polytechnique')

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 400,
            backgroundColor: '#EAEAEA'
        },
        inputView: {
            height: 110,
            width: '100%',
            backgroundColor: 'transparent',

        },
        inputLabel: {
            fontSize: 18,
            position: 'absolute',
            color: 'black',
            top: 10,
            left: 14
        },
        input: {
            width: '95%',
            height: '50%',
            position: 'absolute',
            top: 50,
            borderWidth: 2,
            alignSelf: 'center',
            paddingLeft: 10,
            color: 'rgba(0,0,0,0.8)',
            borderRadius: 15,
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderColor: 'white'
        }
    })

    return (
        <View style={styles.container}>

            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>
                    Organisation: 
                </Text>

                <TextInput onChangeText={(e)=> setOrganisationName(e)} style={styles.input}  value={organisationName}/>
            </View>

            <AddBalance />
            <DeconnectButton />
            
        </View>
    )
}



const AddBalance = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 79,
            marginTop: 5
        },
        balancetitle: {
            fontSize: 15,
            position: 'absolute',
            color: 'black',
            top: 26,
            left: 10
        },
        plusIcon: {
            width: 30,
            height: 30,
            position: 'absolute',
            right: 10,
            top: 19,
            borderWidth: 2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.balancetitle}>
                Total Balance:     1000
            </Text>

            <TouchableOpacity style={styles.plusIcon} >
                <Image source={require('../images/plus.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export const DeconnectButton = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: "96%",
            height: 60,
            alignSelf: 'center',
            backgroundColor: 'rgba(210, 4, 45, 0.9)',
            marginTop: 10,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonText:{
            fontSize: 17
        }
    })

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.buttonText}>
                Deconnecter
            </Text>
        </TouchableOpacity>
    )
}