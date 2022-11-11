import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieCharts } from '../components/charts.components';
import { TopBar } from '../components/charts.components';
import { Chart, MostShareList } from '../components/charts.components';



export const Charts = ()=>{

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }
    })

    return (
        <View style={styles.container} > 
            <TopBar />
            <Chart/>
            <MostShareList />
            {/* <PieCharts /> */}
        </View>
    )
}