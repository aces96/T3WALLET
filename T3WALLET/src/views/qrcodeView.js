import * as React from 'react';
import { View, StyleSheet , TouchableOpacity, Image, ToastAndroid} from 'react-native';
import { useState , useEffect} from 'react';
import QRCode from 'react-native-qrcode-svg';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFS from "react-native-fs"
import SaveSvg from '../images/saveSvg'




export const QrcodeView = ()=>{

    const [qrCodeSvg, setQrcodeSvg] = useState()


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


        const saveQrToDisk = () => {
            qrCodeSvg.toDataURL((data) => {
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
                <TouchableOpacity onPress={saveQrToDisk} style={{width: 25, height: 25, position: 'absolute', right: 10}}>
                    <SaveSvg width='100%' height='100%' fill='white' />
                </TouchableOpacity>
                <TouchableOpacity style={{width: 25, height: 25, position: 'absolute', left: 10}}>
                    <Image style={{width: '100%', height: '100%'}} source={(require('../images/back.png'))}/>
                </TouchableOpacity>
            </View>
            <QRCode 
            value='https://cred.sensthings.io/index.php?v=6fab9c920a8d8856575153e4bfff8e8c'
            getRef={(qr)=>setQrcodeSvg(qr)}
            quietZone={30}
            size={300}
            />
        </View>
    )
}