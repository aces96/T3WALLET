import * as React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text, Image, FlatList, SafeAreaView} from 'react-native'
import { Item, ImageView } from '../components/dataTable.components';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


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
        backgroundColor: '#3C4048'
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
        borderColor: 'white',
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingLeft: 10,
        borderRadius: 15,
        color: 'white'
    }
})

export const DataTable = ()=>{


    const navigation = useNavigation()

    const [search, setSearch] = useState('')
    const [navTab, setNavTab] = useState('phygital')
    const [viewImage, setImageView] = useState(false)

    const handleClick = ()=>{
        setImageView(true)
    }

    const handleCancel = ()=>{
        setImageView(false)
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={{width: '100%', height: 40, justifyContent: 'center', marginTop: 10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('home')} style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('../images/retour.png')} style={{width: 30, height: 30, marginLeft: 10}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.navView}>
                <TouchableOpacity onPress={()=>{
                    setNavTab('phygital')
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'phygital' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'phygital' ? 'rgb(0,128,255)' : 'white'}}>
                    <Text style={{fontSize: 15, color: navTab == 'phygital' ? 'rgb(0,128,255)': 'white', fontWeight: '600'}}>Phygital</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setNavTab('digital')
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'digital' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'digital' ? 'rgb(0,128,255)' : 'white'}}>
                    <Text style={{fontSize: 15, color: navTab == 'digital'? 'rgb(0,128,255)': 'white' , fontWeight: '600'}}>Digital</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setNavTab('badge')
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'badge' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'badge' ? 'rgb(0,128,255)' : 'white'}}>
                    <Text style={{fontSize: 15, color: navTab == 'badge' ? 'rgb(0,128,255)': 'white', fontWeight: '600'}}>Badge</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchView}>
                <TextInput  onChangeText={(e)=>setSearch(e)} value={search} style={styles.input} placeholder='Rechercher' placeholderTextColor='rgba(255,255,255,0.5)' />
            </View>

            <FlatList
            data={navTab == 'phygital'? PHYGITAL: navTab == 'digital'? DIGITAL : BADGE}
            renderItem={({item: lst}) => <Item handleClick={handleClick} title={lst.fullName} link={lst.CredentielLink} navTab={navTab}/>}
            keyExtractor={(item) => item.id}
            />

            {viewImage &&
                <ImageView handleCancel={handleCancel} />
            }
            
        </SafeAreaView>
    )
}