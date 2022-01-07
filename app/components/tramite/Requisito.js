import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Checkbox from "../checkbox/Checkbox";
import GoMapsButton from "../maps/GoMapsButton";

const Requisito = ({ style, req, mapData, check, onChecked, title }) => {

  const [data, setData] = useState({
    tramite: title,
    detalle: req,
  });

  const navigationCal = useNavigation();
 
  const handlePress = () => {
    navigationCal.navigate("Nuevo Recordatorio",{data: data});
  };

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
        onLongPress={handlePress} 
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
