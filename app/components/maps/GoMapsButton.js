import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MapIcon from '../icons/MapIcon';

export default function GoMapsButton({ data }) {
	
	const navigation = useNavigation();
	
	const handlePress = () => {
		navigation.navigate("maps", { data: data })
	};

	return (
		<Pressable
			onPress={ handlePress }
		>
			<MapIcon/>
		</Pressable>
	)
}
