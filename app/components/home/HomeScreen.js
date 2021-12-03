import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import axios from 'axios';
import { networkEnv } from '../../../network'

const Home = ({navigation}) => {

    const [tramites, setTramites] = useState([]);
    const [apiBase, setApiBase] = useState( networkEnv );
    
    useEffect(()=>{
        if(Platform.OS !== 'android' && Platform.OS !== 'ios' ){
            setApiBase( 'localhost:3000' );
        }
    },[]);

    useEffect(() => {
        let isApiSubscribed = true;
        axios.get(`http://${apiBase}/api/tramites/umss`)
        .then((res) => {
            if (isApiSubscribed) {
                setTramites(res.data);
            }
        });
        return () => {
            isApiSubscribed = false;
        };
    }, [tramites, apiBase])
    
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
                        onPress={() => navigation.navigate('tramite',{
                            tramite
                        }) }
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