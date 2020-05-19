import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        //flex: 1,
        //marginLeft: -10,
        //paddingTop: 3,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },


    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        //flex: 1,
        //alignSelf: 'center',
        //alignContent: 'center',
        //width: 1000,
        //marginHorizontal: 15,
    },

    incident: {
        marginHorizontal: 4,
        marginTop: 10,
        marginBottom: 3,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        elevation: 2,
    },

    incidentTitleMarker: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        //justifyContent: 'flex-start'
    },

    incidentIconMarker: {
        flexDirection: 'row',
        //marginHorizontal: 5
        //justifyContent: 'space-between',
    },

    incidentProperty: {
        fontSize: 18,
        color: '#31314d',
        //color: '#000',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        //color: '#e65719',
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
    }
});