import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, FlatList, Text } from 'react-native';
import { useState } from 'react';
import {PieChart, BarChart} from 'react-native-chart-kit';
import BackSvg from '../images/backSvg.svg'
import { Card } from './dataTable.components';
import { PHYGITAL } from '../fakeData.js/fakeData';
import {useNavigation} from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';



export const PieCharts = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    const data = [
        {
            name: 'phygital',
            total: 500,
            color: 'rgba(36,161,156,0.9)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: 'digital',
            total: 250,
            color: 'rgba(36,161,156,0.7)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: 'badge',
            total: 250,
            color: 'rgba(36,161,156,0.5)',
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
    ]

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        barPercentage: 0.5,

    }

    return (
        <View style={styles.container}>
            <PieChart  absolute paddingLeft='18'   center={[5, -10]}data={data} width={Dimensions.get('screen').width} height={230}  accessor={"total"}  chartConfig={chartConfig} style={{width: '100%', height: '80%'}}/>
        </View>
    )
}

export const BarCharts = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '75%',
            backgroundColor: 'white',
            marginBottom: 20
        }
    })

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
        {
            data: [5, 10, 28, 20, 15, 0],
        }
        ],
        
    };

    const chartConfig = {
        backgroundGradientFrom: "#29b6b0",
        backgroundGradientFromOpacity: 0.2,
        backgroundGradientTo: "#2dcbc4",
        backgroundGradientToOpacity: 0.5,
        fillShadowGradient: 'black',
        fillShadowGradientOpacity: 1,
        data: data.datasets,
        decimalPlaces: 0,
        color: (opacity = 1) => '#6a6a6a',
        labelColor: () => '#6a6a6a',
      };



    return (
        <View style={styles.container}>
            <BarChart   style={{flex : 1, marginTop: 5}} chartConfig={chartConfig} data={data} width={Dimensions.get('window').width} height={300} segments={10} fromZero={true} />
        </View>
    )
}



export const TopBar = ()=>{


    const navigation = useNavigation()

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 80,
            backgroundColor: '#24A19C',
        },
        backButton: {
            width: 30,
            height: 30,
            position: 'absolute',
            top: 40,
            left: 10
        }
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
                <BackSvg width={'100%'} height={'100%'} fill={'white'}  />
            </TouchableOpacity>
        </View>
    )
}



export const Chart = ()=>{

    const [step, setStep ] = useState(1)

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 310,
            backgroundColor: 'white'
        },
        buttonsView: {
            width: '100%',
            height: 50,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'absolute',
            top: 260,
            marginTop: 20
        }
    })


    const onSwipeLeft = ()=>{
        if(step == 1){
            setStep(2)
        }else if(step ==2){
            setStep(1)
        }
    }
    const onSwipeRight = ()=>{
        if(step == 1){
            setStep(2)
        }else if(step ==2){
            setStep(1)
        }
    }
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    return (
        <View style={styles.container} >

            <GestureRecognizer config={config} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} style={{flex: 1}}>
                {step == 1 ? <BarCharts /> : <PieCharts />}
            </GestureRecognizer>

            <View style={styles.buttonsView}>
                <TouchableOpacity onPress={()=>{
                    setStep(1)
                }} style={{width: '35%', height: '100%', borderBottomWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: step == 1 ? '#24A19C' : 'black'}}>
                    <Text style={{fontSize: 15, color: step == 1 ? '#24A19C' : 'black'}}>SHARES</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setStep(2)
                }} style={{width: '35%', height: '100%', borderBottomWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: step == 2 ? '#24A19C' : 'black'}}>
                    <Text style={{fontSize: 15, color: step == 2 ? '#24A19C' : 'black'}}>CREDENTIELS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export const MostShareList = (props)=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flex: 1,
            backgroundColor: 'white',
            marginTop: 30
        },
        title: {
            fontSize: 20,
            fontFamily: 'Roboto-Bold',
            color: 'rgba(0,0,0,0.7)',
            paddingLeft: 20,
            marginBottom: 20,

        }
    })




    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Most shared credentiels
            </Text>

            <FlatList  data={PHYGITAL} renderItem={({item: lst}) =><Card handleClick={props.handleClick} handleEdit={props.handleEdit} link={lst.CredentielLink} title={lst.fullName} key={lst.id}/>}/>
        </View>
    )
}