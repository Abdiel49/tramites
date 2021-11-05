import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Navbar from '../nav/Navbar';

const Home = () => {

    const tramites = require('../../json/tramites.json');

    return(
        <View>
            <Navbar title={ 'Tramites FCyT' }/>
            {
                tramites.map((tramite) => (
                    <TouchableOpacity style={ styles.buttonStyle }>{tramite.titulo}</TouchableOpacity> 
                ))  
            }
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#0F354A',
        color: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 20,
        borderRadius: 10,
        fontFamily: 'Helvetica, Arial'
    } 
});

export default Home;