import * as React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar, FlatList, SafeAreaView, Animated} from 'react-native'
import { PhygitalItem,DigitalItem,BadgeItem, ImageView, DataTableTopBar, DataTableBottomSlide } from '../components/dataTable.components';
import { useState, useRef } from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';




const PHYGITAL = [
    {  
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Achraf Esraidi',
    CredentielLink: 'https://www.google.com'
    },
    {  
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Soufiane Fatih',
    CredentielLink: 'https://www.google.com'
    },
    {  
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Yassine Azzedine',
    CredentielLink: 'https://www.google.com'
    },


];

const DIGITAL = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Digital',
    },
]


const BADGE = [
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Badge',
    },
]


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    navView: {
        width: '100%',
        height: 50, 
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    searchView: {
        width: '100%',
        height: 50,
        marginBottom: 20,
        marginTop: 20
    },
    input: {
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#24A19C',
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingLeft: 10,
        borderRadius: 15,
        color: 'black'
    },
    slideUp: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(36,161,156,0.2)',
        borderWidth: 2,
        borderColor: '#24A19C',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    
})



export const DataTable = ()=>{




    const fadeAnim  = useRef(new Animated.Value(0)).current;

    const [search, setSearch] = useState('')
    const [navTab, setNavTab] = useState('phygital')
    const [viewImage, setImageView] = useState(false)
    const [bottomSlideUp, setBottomSlideUp] = useState(false)

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
        toValue: 120,
        duration: 300
        }).start();
    };
    
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300
        }).start();
    };



    const handleEdit = ()=>{
        fadeIn()
    }


    SystemNavigationBar.navigationHide()


    const handleClick = ()=>{
        setImageView(true)
    }

    const handleCancel = ()=>{
        setImageView(false)
    }

    const onSwipeDown = (gestureState) => {
            fadeOut()
    }

    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_UP, SWIPE_DOWN} = swipeDirections;
        switch (gestureName) {
        case SWIPE_UP:
            break;
        case SWIPE_DOWN:
            break;
            default: 
            break
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <DataTableTopBar />


            <View style={styles.navView}>
                <TouchableOpacity onPress={()=>{
                    setNavTab('phygital')
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'phygital' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'phygital' ? '#24A19C' : 'black'}}>
                    <Text style={{fontSize: 15, color: navTab == 'phygital' ? '#24A19C': 'black', fontWeight: '600'}}>Phygital</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setNavTab('digital')
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'digital' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'digital' ? '#24A19C' : 'black'}}>
                    <Text style={{fontSize: 15, color: navTab == 'digital'? '#24A19C': 'black' , fontWeight: '600'}}>Digital</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setNavTab('badge')
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'badge' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'badge' ? '#24A19C' : 'black'}}>
                    <Text style={{fontSize: 15, color: navTab == 'badge' ? '#24A19C': 'black', fontWeight: '600'}}>Badge</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchView}>
                <TextInput  onChangeText={(e)=>setSearch(e)} value={search} style={styles.input} placeholder='Rechercher' placeholderTextColor='rgba(0,0,0,0.5)' />
            </View>

            <FlatList
            data={navTab == 'phygital'? PHYGITAL: navTab == 'digital'? DIGITAL : BADGE}
            renderItem={({item: lst}) => navTab == 'phygital'? <PhygitalItem handleEdit={handleEdit}  handleClick={handleClick} title={lst.fullName} link={lst.CredentielLink} navTab={navTab} />: navTab == 'digital'? <DigitalItem handleEdit={handleEdit} handleClick={handleClick} title={lst.fullName} link={lst.CredentielLink} navTab={navTab}/> : <BadgeItem handleEdit={handleEdit} handleClick={handleClick} title={lst.fullName} link={lst.CredentielLink} navTab={navTab}/>}
            keyExtractor={(item) => item.id}
            />
            <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            onSwipeDown={(state) => {
                console.log(state)
                onSwipeDown()
            }}
            style={{flex: 1}}>
                <Animated.View style={{...styles.slideUp,height: fadeAnim}}>

                    <TouchableOpacity style={{width: 80, height: 80, borderWidth: 1, marginTop: 20, borderRadius: 25, backgroundColor: 'white'}}>

                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 80, height: 80, borderWidth: 1,marginTop: 20, borderRadius: 25}}>

                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 80, height: 80, borderWidth: 1, marginTop: 20, borderRadius: 25}}>

                    </TouchableOpacity>

                </Animated.View> 
            </GestureRecognizer>


            {viewImage &&
                <ImageView handleCancel={handleCancel} />
            }





        </SafeAreaView>
    )
}