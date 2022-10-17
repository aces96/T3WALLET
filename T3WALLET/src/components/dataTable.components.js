import * as React from 'react';
import { useRef, useState } from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity, } from 'react-native'



const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop:  0,
    },
    item: {
    width: '90%',
    marginBottom: 10,
    borderRadius: 20,
    alignSelf: 'center'
    },
    title: {
    fontSize: 20,
    color: 'black'
    },
});


export const Card = ({ title, navTab }) => {
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
    const fadeAnim = useRef(new Animated.Value(100)).current;

    console.log(navTab);

    const [Height, setHeight] = useState(50)


    
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 200,
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
        }} style={{...styles.item, height: fadeAnim, backgroundColor: navTab == 'phygital' ? 'red' : navTab == 'digital' ? 'yellow' : 'grey'}}>
            <Text style={styles.title}>{title}</Text>
        </AnimatedTouchable>
    )
}




export const Item = ({ title,fadeAnim, navTab})=>{

    console.log(navTab);
    

    return (
        <Card navTab={navTab} fadeAnim={fadeAnim} title={title}/>
    )
}