import React from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MapIcon from '../icons/MapIcon';

export default function GoMapsButton({ data }) {
	
	const navigation = useNavigation();
	
	const handlePress = async() => {
		await navigation.navigate("maps", { data: data })
	};

	return (
		<Pressable
			onPress={ handlePress }
			testID="buttonToMaps"
		>
			<MapIcon testID="mapIconComponent"/>
		</Pressable>
	)
}
