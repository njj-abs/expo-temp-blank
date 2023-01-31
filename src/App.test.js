import * as React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { Text } from 'react-native';
import * as AddButton from './components/AddButton';

test('App', () => {
	jest.spyOn(AddButton, 'default').mockReturnValue(<Text title="Add"/>);

	const result = renderer.create(<App/>).toJSON();

	expect(result.children[0].children[0])
		.toEqual('Open up App.js to start working on your app!');
	expect(result.children[1].type).toEqual('Text');
});
