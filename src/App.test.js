import * as React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';
import { Text } from 'react-native';
import * as AddButton from './AddButton';

test('App', () => {
	jest.spyOn(AddButton, 'default').mockReturnValue(<Text title="Add"/>);

	const result = render(<App/>).toJSON();

	expect(result.children[0].children[0])
		.toEqual('Open up App.js to start working on your app!');
	expect(result.children[1].type).toEqual('Text');
});
