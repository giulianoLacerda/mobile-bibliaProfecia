import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 22,
        textAlign:'center',
        flex: 1,
        color: '#000',
        fontWeight: 'bold',
        //color: '#E82041',
        //paddingLeft: 110,
    }
})