import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native'
import { useSelector } from 'react-redux';




export const  DiplomeImage = ()=>{

    const credentielInfo = useSelector(state=>state.CredentielsSlice.OneCred)


    const styles = StyleSheet.create({
        container: {
            width: '90%',
            height: 300,
            alignSelf: 'center',
        },image:{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            
        }
    })

    React.useEffect(()=>{
        console.log(credentielInfo.image)
    },[])

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/diplome.png')}/>
        </View>
    )
}