import React from 'react';
import { Text, View } from 'react-native';
import Checkbox from '../checkbox/Checkbox';
import GoMapsButton from '../maps/GoMapsButton';

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
        style={{
          fontSize: 15,
          paddingHorizontal: 16
        }}
      >
        {req}
      </Text>
    </View>
  );
};

export default Requisito;
