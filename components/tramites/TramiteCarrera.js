import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../nav/Navbar';

const Tramite = ({info}) => {

    return(
        <View>
            <Navbar title={info.titulo}/>
            <ScrollView>
                <Text style={ estilos.conttexto }>
                    {info.descripcion}
                </Text>
                <Text>
                    Requisitos: 
                    {
                        info.requisitos.map(item => (
                            <View style={estilos.conttexto}>
                                <Text>
                                    {item.requisito}
                            
                                </Text>
                            </View>
                        ))
                    }
                </Text>
            </ScrollView>
        </View>
    );
    
};

const estilos = StyleSheet.create({
    conttexto: {
        position: 'relative',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        color: 'white',
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        opacity: 0.8
    }
});

export default Tramite;