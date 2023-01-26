import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'expo-dev-client';
import Location from './components/Location';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const App = () =>
	<View style={ styles.container }>
		<Text>Open up App.js to start working on your app!</Text>
		{/* eslint-disable-next-line react/style-prop-object */}
		<StatusBar style="auto"/>
		<Location/>
	</View>;

export default App;
