import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PieCharts } from '../components/charts.components';
import { TopBar } from '../components/charts.components';
import { Chart, MostShareList } from '../components/charts.components';
import { CardMoreModal } from '../components/dataTable.components';
import { ImageView } from '../components/dataTable.components';



export const Charts = ()=>{

    const [showModal, setShowModal] = useState(false)
    const [viewImage, setImageView] = useState(false)


    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }
    })

    const handleClick = ()=>{
        setImageView(true)
    }


    const handleEdit = (title, link, image)=>{
        setShowModal(true)
    }

    const handleCancel = ()=>{
        setImageView(false)
    }



    
    return (
        <View style={styles.container}> 
            {showModal && <CardMoreModal handleBackgroundPress={()=>setShowModal(false)}/>}
            <TopBar />
            <Chart/>
            <MostShareList handleClick={handleClick} handleEdit={handleEdit} />
            {viewImage &&
                <ImageView handleCancel={handleCancel} />
            }
            {/* <PieCharts /> */}
        </View>
    )
}