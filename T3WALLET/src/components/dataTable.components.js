import * as React from 'react';
import { useRef, useState } from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity,Image, Linking, Dimensions, ToastAndroid} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

import PlusSvg from '../images/plusSvg2'
import MoreSvg from '../images/moreSvg2'
import ShareSvg from '../images/shareSvg2'
import QrcodeSvg from '../images/qrcodeSvg2'
import CancelSvg from '../images/cancelSvg'



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
            <Text style={{...styles.title, fontFamily: 'Roboto-Medium'}}>{title}</Text>
            <View style={{height: 45, flexDirection: 'row'}}>
                <Text style={{...styles.title, fontFamily: 'Roboto-Regular'}}>credentiel link:</Text>
                <Text onPress={()=>Linking.openURL(`${link}`)} style={{...styles.title, marginLeft: 15, color: '#24A19C', textDecorationLine: 'underline', fontFamily: 'Roboto-Regular'}}>Open credentiel</Text>
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


        <ReactNativeZoomableView pinchToZoomInSensitivity={5}	 contentWidth={Dimensions.get('window').get} contentHeight={150} maxZoom={2} minZoom={1} movementSensibility={2} >
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

export const PlusSettings = ()=>{

    const [expanded, setExpanded] = useState(false)
    
    const initialValue = useRef(new Animated.Value(60)).current


    const expandView = ()=>{
        Animated.timing(initialValue, {
          toValue: 350,
          duration: 300,
          useNativeDriver: false
        }).start()
    }
    const shrinkView = ()=>{
        Animated.timing(initialValue, {
          toValue: 60,
          duration: 300,
          useNativeDriver: false
        }).start()
    }
    const styles = StyleSheet.create({
      container: {
        height: initialValue,
        width: initialValue,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'white',
        zIndex: 10,
        borderWidth: 2,
        borderColor: '#24A19C'
      },
      plusIcon: {
        width: 25,
        height: 25,
        position: 'absolute',
        bottom: 15,
        right: 15,
      }
    })

  return (
      <Animated.View  style={styles.container}>
          <TouchableOpacity onPress={()=> {

            if(!expanded){
              setExpanded(true)
              expandView()
            }else {
              setExpanded(false)
              shrinkView()
            }

          } } style={styles.plusIcon}>
            {expanded ? <CancelSvg fill='green' width='100%' height='100%'/> : <PlusSvg fill='green' width='100%' height='100%'/>}
          </TouchableOpacity>
        
      </Animated.View>
  )
}



export const CardMoreModal = (props)=>{

    const navigation = useNavigation()


  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modal: {
      width: '80%',
      height: 300,
      position: 'absolute',
      zIndex: 300,
      backgroundColor: 'white',
      justifyContent: 'space-around'
    }, 
    buttons: {
      width: '90%',
      height: 70,
      borderWidth: 2,
      alignSelf: 'center',
      borderRadius: 20,
      borderColor: '#24A19C'
    },
    text: {
      fontSize: 20,
      fontFamily: 'Roboto-Medium',
      color: '#24A19C',
      position: 'absolute',
      top: 13,
      left: 20
    }
  })


    


  return (
    <View style={{width: '100%', height: '100%', position: 'absolute', zIndex: 100, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'  }}>
      <TouchableOpacity onPress={()=>{
        props.handleBackgroundPress()
      }} style={styles.container} activeOpacity={1}>
      </TouchableOpacity>

      <View style={styles.modal}>
        <TouchableOpacity style={styles.buttons}>
          <View style={{width: 30, height: 30, position: 'absolute', right: 10, top: 20}}>
            <ShareSvg height='100%' width= '100%' fill='#24A19C'/>
          </View>

          <Text style={styles.text}>SHARE</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('qrcode')}  style={styles.buttons}>
          <View style={{width: 30, height: 30, position: 'absolute', right: 10, top: 20}}>
            <QrcodeSvg height='100%' width= '100%' fill='#24A19C'/>
          </View>

          <Text style={styles.text}>QRCODE</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>

          <View style={{width: 30, height: 30, position: 'absolute', right: 10, top: 20}}>
            <MoreSvg height='100%' width= '100%' fill='#24A19C'/>
          </View>

          <Text style={styles.text}>MORE</Text>

        </TouchableOpacity>


      </View>
    </View>
  )
}