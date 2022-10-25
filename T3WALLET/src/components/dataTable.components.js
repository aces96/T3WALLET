import * as React from 'react';
import { useRef, useState } from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity,Image, Linking, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';
import QRCode from 'react-native-qrcode-svg';



const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop:  0
    },
    item: {
    width: '90%',
    marginBottom: 10,
    alignSelf: 'center',
    padding: 10,
    borderColor: '#24A19C',
    borderWidth: 2,
    borderRadius: 15

    },
    title: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    },
    diplomeImage: {
      width: "100%",
      height: '100%'
    },

    imageView: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
      position: 'absolute',
      zIndex: 10
    },
    
});


export const Card = ({key, title, navTab, link , handleClick, handleEdit}) => {
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    const fadeAnim = useRef(new Animated.Value(100)).current;

    console.log(navTab);

    const [Height, setHeight] = useState(50)


    
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 350,
      duration: 300
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 300
    }).start();
  };


    return (
        <AnimatedTouchable key={Math.random() * 100} onPress={()=>{
            if(Height == 100){
                fadeOut()
                setHeight(50)
            }else if(Height == 50){
                fadeIn()
                setHeight(100)
            }
        }} style={{...styles.item, height: fadeAnim, backgroundColor: 'rgba(36,161,156,0.1)'}}>
            <Text style={{...styles.title, fontFamily: 'Oswald-Medium'}}>{title}</Text>
            <View style={{height: 45, flexDirection: 'row'}}>
                <Text style={{...styles.title, fontFamily: 'Oswald-Regular'}}>credentiel link:</Text>
                <Text onPress={()=>Linking.openURL(`${link}`)} style={{...styles.title, marginLeft: 15, color: '#24A19C', textDecorationLine: 'underline', fontFamily: 'Oswald-Regular'}}>Open credentiel</Text>
            </View>
            {Height == 100 &&
              <TouchableOpacity onPress={()=>{
                handleClick()
              }} style={{height: 180, width: '90%', alignSelf: 'center', marginTop: 20, borderWidth: 2, borderColor: 'black'}}>
                  <Image style={styles.diplomeImage} source={require('../images/diplome.png')}/>
              </TouchableOpacity>
            }

            <TouchableOpacity onPress={()=> {
              const image = require('../images/edit.png')
              handleEdit(title, link, image)
            }} style={{flex: 1, position: 'absolute', bottom: 10, right: 20}}>
              <Image style={{height: 25, width: 25}} source={require('../images/edit.png')}/>
            </TouchableOpacity>

        </AnimatedTouchable>
    )
}




export const PhygitalItem = ({ key, title,fadeAnim, navTab, link, handleClick, handleEdit})=>{

    console.log(navTab);
    

    return (
        <Card key={key} handleEdit={handleEdit} handleClick={handleClick} link={link} navTab={navTab} fadeAnim={fadeAnim} title={title}/>
    )
}
export const DigitalItem = ({key,  title,fadeAnim, navTab, link, handleClick, handleEdit})=>{

    console.log(navTab);
    

    return (
        <Card key={key} handleEdit={handleEdit} handleClick={handleClick} link={link} navTab={navTab} fadeAnim={fadeAnim} title={title}/>
    )
}

export  const BadgeItem = ({key, title,fadeAnim, navTab, link, handleClick, handleEdit})=>{

    console.log(navTab);
    

    return (
        <Card key={key} handleEdit={handleEdit} handleClick={handleClick} link={link} navTab={navTab} fadeAnim={fadeAnim} title={title}/>
    )
}



export const ImageView = (props)=>{

  return (
    <View style={styles.imageView}>
        <TouchableOpacity onPress={()=>{
          props.handleCancel()
        }} style={{flex: 1, position: 'absolute', right: 20, top: 35, marginBottom: 10, zIndex: 100}}>
          <Image style={{height: 35 , width: 35}} source={require('../images/cancel.png')}/>
        </TouchableOpacity>
        <ReactNativeZoomableView pinchToZoomInSensitivity={5}	 contentWidth={Dimensions.get('window').get} contentHeight={150} maxZoom={2}>
          <Image style={{width: Dimensions.get('window').width, height: 300, resizeMode: 'contain'}}  source={require('../images/diplome.png')}/>
        </ReactNativeZoomableView>
    </View>
  )
}


export const DataTableTopBar = ()=>{

    const navigation = useNavigation()

    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: 80,
        backgroundColor: '#24A19C',
        justifyContent: 'flex-end',
    },
    })

    return (
      <View style={styles.container}>
          <View style={{width: 40, height: 40, justifyContent: 'center', marginTop: 20}}>
              <TouchableOpacity onPress={()=>{
                console.log('heeeere');
                navigation.navigate('home')
              }} style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={require('../images/back.png')} style={{width: 30, height: 30, marginLeft: 10}}/>
              </TouchableOpacity>
          </View>
      </View>
    )
}




export const QrCodePreview = (props)=>{

    const link = 'https://www.google.com/'

    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        zIndex: 10
      },
    })
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={()=>{
          props.handleCancel()
        }} style={{flex: 1, position: 'absolute', right: 20, top: 35, marginBottom: 10, zIndex: 100}}>
          <Image style={{height: 35 , width: 35}} source={require('../images/cancel.png')}/>
        </TouchableOpacity>

        <QRCode size={300} value={link}/>
      </View>
    )
}


// export const DataTableBottomSlide = ({fadeAnim})=>{
//   return (

//   )
// }