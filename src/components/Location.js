import { View, Button } from 'react-native';
import React, { useEffect } from 'react';
import * as ExpoLocation from 'expo-location';

const Location = () => {
	useEffect(() => {
		(async () => {
			const { status } = await ExpoLocation
				.getForegroundPermissionsAsync();

			// eslint-disable-next-line no-console
			console.log(status);
		})();
	}, []);

	return <View>
		<Button title="Location">Location</Button>
	</View>;
}
  ;

export default Location;
