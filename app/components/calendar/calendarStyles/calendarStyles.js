import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const calendarStyles = StyleSheet.create({
    
    contCalendar: {
        //justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        height: '93%',
        marginVertical: 20,
        paddingVertical: 20
    },

    textInput: {
        alignSelf: 'center',
        width: '93%', 
        height: 'auto',
        fontSize: 18,
        marginVertical: 8,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        fontWeight: 'bold'
    },

    textAreaInput: {
        textAlignVertical: 'top',
        alignSelf: 'center',
        width: '93%', 
        height: 100,
        fontSize: 18,
        marginVertical: 8,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        fontWeight: 'bold'
    },

    buttonCalendar: {
        marginTop: 8,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '93%',
        padding: 10,
        borderRadius: 10
    },

    buttonCalendarText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },

    contButtons: {
        marginTop: 50,
        flexDirection: 'column',
    },

    buttonOptions: {
        backgroundColor: colors.blue,
        width: '93%',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        alignSelf: 'center'
    },

    buttonOptionDisabled: {
        backgroundColor: '#c8c7cc',
        width: '93%',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        alignSelf: 'center'
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },

    buttonTextDisabled: {
        color: '#8f8f8f',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },

    labelText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 12
    }
});