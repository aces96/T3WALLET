import * as React from 'react';
import { View, StyleSheet , TouchableOpacity, Image, ToastAndroid} from 'react-native';
import { useState , useRef, useCallback} from 'react';
import QRCode from 'react-native-qrcode-svg';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFS from "react-native-fs"
import SaveSvg from '../images/saveSvg'
import { useNavigation } from '@react-navigation/native';
import ShareSvg from '../images/shareSvg2'
import  Share  from 'react-native-share';
import { useFocusEffect } from '@react-navigation/native';



export const QrcodeView = ()=>{
    
    const ref = useRef(null)


    const navigation = useNavigation()

    const [qrCodeSvg, setQrcodeSvg] = useState()
    const [base64, setBase64] = useState()


    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
        },
        topBar: {
            width: '100%',
            height: 80,

            position: 'absolute',
            top: 50
        }
    })


    useFocusEffect(
        useCallback(()=>{
            getDataURL()
        },[])
    )


    const getDataURL = () =>  {
        ref.current.toDataURL((res)=>{
            setBase64(res)
        });
    }


    const shareQrcode =   async ()=>{

        try {            
            const options = {
                title: 'Qrcode image',
                url: `data:image/png;base64,${base64}`
            }
            await Share.open(options)
    
    
        } catch (error) {
            console.log('error',error);
        }


    }


    const saveQrToDisk = () => {
            qrCodeSvg.toDataURL((data) => {
                console.log('daaaaaata', data);
              RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
                .then((success) => {
                  return CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+"/some-name.png", 'photo')
                })
                .then((res) => {
                  console.log('reeees', res);
                  ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
                })
            })
    }







    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={()=>saveQrToDisk()} style={{width: 25, height: 25, position: 'absolute', right: 10}}>
                    <SaveSvg width='100%' height='100%' fill='white' />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>shareQrcode()} style={{width: 25, height: 25, position: 'absolute', right: 60}}>
                    <ShareSvg width='100%' height='100%' fill='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{width: 25, height: 25, position: 'absolute', left: 10}}>
                    <Image style={{width: '100%', height: '100%'}} source={(require('../images/back.png'))}/>
                </TouchableOpacity>
                </View>
                <QRCode 
                value='https://cred.sensthings.io/index.php?v=6fab9c920a8d8856575153e4bfff8e8c'
                getRef={(qr)=>ref.current = qr}
                quietZone={30}
                size={300}
                />
        </View>
    )
}