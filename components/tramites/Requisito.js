import React from 'react';
import { Text, View } from 'react-native';
import Checkbox from '../checkbox/Checkbox';

const Requisito = ({style ,req , check, onChecked}) => {

    return(
        <View style={style}>
            <Checkbox 
                value={check}
                onCheck={() => onChecked()}
            />
            <Text style={{fontSize: 15, paddingHorizontal: 16}}>
                {req}
            </Text>
        </View>
    );
};

export default Requisito;