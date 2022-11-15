import * as React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar, FlatList, SafeAreaView, Animated, Share, ActivityIndicator} from 'react-native'
import { PhygitalItem,DigitalItem,BadgeItem, ImageView, DataTableTopBar,QrCodePreview, PlusSettings, CardMoreModal } from '../components/dataTable.components';
import { useState, useRef, useEffect } from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { updateCredentiels, updateOneCred, updateType } from '../redux/credentielsData';




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
        backgroundColor: 'rgba(36,161,156,1)',
        borderWidth: 2,
        borderColor: '#24A19C',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'space-around',
        flexDirection: 'row',
        zIndex: 500
    },
    
})



export const DataTable = ()=>{
    SystemNavigationBar.navigationHide()
    const navigation = useNavigation()

    const dispatch = useDispatch()


    let credentiels = useSelector(state=>state.CredentielsSlice.credentiels)
    console.log(credentiels);
    const navTab = useSelector(state=>state.CredentielsSlice.type)

    const fadeAnim  = useRef(new Animated.Value(0)).current;
    const [active, setActive] = useState(false)
    const [search, setSearch] = useState('')
    const [viewImage, setImageView] = useState(false)
    const [viewQrCode, setViewQrCode] = useState(false)
    const [searchedCred, setSearchedCred] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(()=>{
        if(search.length == 0){
            setSearchedCred([])
        }
    },[search])

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
        toValue: 120,
        duration: 300,
        useNativeDriver: false
        }).start();
    };
    
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
        }).start();
    };

    const handleEdit = (title, link, image)=>{
        setShowModal(true)
        // dispatch(updateOneCred(data))
    }




    const handleClick = ()=>{
        setImageView(true)
    }

    const handleCancel = ()=>{
        setImageView(false)
    }




    const handleSearch = ()=>{
    setSearchedCred(credentiels.filter((data)=> data.fullName.slice(0, search.length).toUpperCase() == search.toUpperCase()))
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'transparent'}/>
            <DataTableTopBar />
                {showModal &&  <CardMoreModal handleBackgroundPress={()=>setShowModal(false)}/>}
            <View style={styles.navView}>
                <TouchableOpacity onPress={()=>{
                    dispatch(updateType('phygital'))
                    setSearchedCred([])
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'phygital' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'phygital' ? '#24A19C' : 'black'}}>
                    <Text style={{fontSize: 15, color: navTab == 'phygital' ? '#24A19C': 'black', fontWeight: '600',fontFamily: 'Roboto-Bold'}}>Phygital</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    dispatch(updateType('digital'))
                    setSearchedCred([])
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'digital' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'digital' ? '#24A19C' : 'black'}}>
                    <Text style={{fontSize: 15, color: navTab == 'digital'? '#24A19C': 'black' , fontWeight: '600', fontFamily: 'Roboto-Bold'}}>Digital</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    dispatch(updateType('badge'))
                    setSearchedCred([])
                }} style={{width: '30%', height: '100%', borderBottomWidth: navTab == 'badge' ? 5: 2, justifyContent: 'center', alignItems: 'center', borderColor: navTab == 'badge' ? '#24A19C' : 'black'}}>
                    <Text style={{fontSize: 15, color: navTab == 'badge' ? '#24A19C': 'black', fontWeight: '600', fontFamily: 'Roboto-Bold'}}>Badge</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.searchView}>
                <TextInput  onChangeText={(e)=>{
                    setSearch(e)
                    handleSearch()
                }} value={search} style={styles.input} placeholder='Rechercher' placeholderTextColor='rgba(0,0,0,0.5)' />
            </View>

            { !active ? 
                <FlatList
                data={searchedCred.length > 0 ? searchedCred : search.length == 1 ?  credentiels : credentiels}
                renderItem={({item: lst}) => navTab == 'phygital'? <PhygitalItem handleEdit={handleEdit}  handleClick={handleClick}  title={lst.fullName} link={lst.CredentielLink} key={lst.id} navTab={navTab} />: navTab == 'digital'? <DigitalItem key={lst.id}  handleEdit={handleEdit} handleClick={handleClick} title={lst.fullName} link={lst.CredentielLink} navTab={navTab}/> : <BadgeItem key={lst.id}  handleEdit={handleEdit} handleClick={handleClick} title={lst.fullName} link={lst.CredentielLink} navTab={navTab}/>}
                />
                : <ActivityIndicator size={50} animating={active} style={{alignSelf: 'center', marginTop: 80}}/>}
            {/* <PlusSettings /> */}
            {viewImage &&
                <ImageView handleCancel={handleCancel} />
            }
            {viewQrCode &&
                <QrCodePreview handleCancel={()=>setViewQrCode(false)} />
            }
        </SafeAreaView>
    )
}