import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../nav/Navbar';

const Home = ({navigation}) => {

    const tramites = require('../../json/tramites.json')

    return(
        <View>
            <TouchableOpacity
                style={ styles.buttonStyle }
                onPress={ () => navigation.navigate('tramiteInscripcion') }
            >
                <Text style={ styles.texteStyle }>
                    Inscripción a una Carrera
                </Text>
            </TouchableOpacity>
            {
                tramites.map((tramite) => (
                    <TouchableOpacity
                        key={ tramite.id} 
                        style={ styles.buttonStyle }
                        onPress={() => navigation.navigate(tramite.nombre) }
                    >
                        <Text style={styles.texteStyle}>
                            {tramite.titulo}
                        </Text>      
                    </TouchableOpacity> 
                ))  
            }
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#0F354A',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 20,
        borderRadius: 10,
    },

    texteStyle: {
        color: 'white',
        fontSize: 17
    }
});

export default Home;