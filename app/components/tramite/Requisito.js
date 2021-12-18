import React from 'react';
import { Text, View } from 'react-native';
import Checkbox from '../checkbox/Checkbox';
import GoMapsButton from '../maps/GoMapsButton';
import { tramiteStyle } from './styles/tramiteItem';

const Requisito = ({ style, req, mapData, check, onChecked }) => {
  return (
    <View
      testID="req-test"
      style={style}
    >
      <View>
        <Checkbox
          value={check}
          onCheck={() => onChecked()}
        />
        {
          !!mapData.haveLocation && <GoMapsButton data={mapData} />
        }
      </View>
      <Text
        style={tramiteStyle.texto}
      >
        {req}
      </Text>
    </View>
  );
};

export default Requisito;
