import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from '@components/AddButton';

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
		<AddButton/>
	</View>;

export default App;
