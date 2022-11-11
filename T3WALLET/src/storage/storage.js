import AsyncStorage from '@react-native-async-storage/async-storage';




export const storeFingerPrintEnabled = async (value) => {
    try {
        await AsyncStorage.setItem('fingerPrint', value)
        console.log('====================================');
        console.log('done valuuuue', value);
        console.log('====================================');
    } catch (e) {
    console.log(e);
    }
}



export const getFingerPrintEnabled = async () => {
    try {
        const value = await AsyncStorage.getItem('fingerPrint')
        if(value !== null) {
        return value;
        }else if (value == null) {
            return null
        }
    } catch(e) {
        console.log(e);
    }
}


export const removeFingerPrintEnabled = async () => {
    try {
      await AsyncStorage.removeItem('fingerPrint')
    } catch(e) {

        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }
    console.log('Done.')
}