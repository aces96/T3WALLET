import * as React from 'react';
import { useRef, useState } from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity,Image } from 'react-native'



const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop:  0

    },
    item: {
    width: '90%',
    marginBottom: 10,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 10
    },
    title: {
    fontSize: 15,
    color: 'black'
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
    }


});


export const Card = ({ title, navTab, link , handleClick}) => {
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    const fadeAnim = useRef(new Animated.Value(100)).current;

    console.log(navTab);

    const [Height, setHeight] = useState(50)


    
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 300,
      duration: 300
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 300
    }).start();
  };


    return (
        <AnimatedTouchable onPress={()=>{
            if(Height == 100){
                fadeOut()
                setHeight(50)
            }else if(Height == 50){
                fadeIn()
                setHeight(100)
            }
        }} style={{...styles.item, height: fadeAnim, backgroundColor: 'rgba(255,255,255,0.5)'}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>credentiel link: {link}</Text>
            {Height == 100 &&
              <TouchableOpacity onPress={()=>{
                handleClick()
              }} style={{height: 180, width: '90%', alignSelf: 'center', marginTop: 20, borderWidth: 2, borderColor: 'black'}}>
                  <Image style={styles.diplomeImage} source={require('../images/diplome.png')}/>
              </TouchableOpacity>
            }

            <TouchableOpacity style={{flex: 1, position: 'absolute', bottom: 10, right: 20}}>
              <Image style={{height: 20, width: 20}} source={require('../images/edit.png')}/>
            </TouchableOpacity>
        </AnimatedTouchable>
    )
}




export const Item = ({ title,fadeAnim, navTab, link, handleClick})=>{

    console.log(navTab);
    

    return (
        <Card handleClick={handleClick} link={link} navTab={navTab} fadeAnim={fadeAnim} title={title}/>
    )
}



export const ImageView = (props)=>{

  return (
    <View style={styles.imageView}>
        <TouchableOpacity onPress={()=>{
          props.handleCancel()
        }} style={{flex: 1, position: 'absolute', right: 20, top: 10}}>
          <Image style={{height: 35 , width: 35}} source={require('../images/cancel.png')}/>
        </TouchableOpacity>
        <View style={{width: '100%', height: 300}}>
          <Image style={{width: '100%', height: '100%', resizeMode: 'cover'}}  source={require('../images/diplome.png')}/>
        </View>
    </View>
  )
}