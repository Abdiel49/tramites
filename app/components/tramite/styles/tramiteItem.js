import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

const tramiteStyle = StyleSheet.create({
    stepCont: {
        position: 'relative',
        backgroundColor: colors.bgStepColor,
        color: 'black',
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderRightColor: 'rgba(181,181,181,0.5)',
        borderBottomColor: 'rgba(181,181,181,0.5)',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepDesc: {
        fontSize: 15,
    },
    stepCont2: {
        position: 'relative',
        backgroundColor: colors.bgStepColor,
        color: 'black',
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderRightColor: 'rgba(181,181,181,0.5)',
        borderBottomColor: 'rgba(181,181,181,0.5)',
        borderRadius: 20,
        fontSize: 15,
        flexDirection: 'row'
    },
    scrollViewCont: {
        padding: 15,
    }
});

export default tramiteStyle;