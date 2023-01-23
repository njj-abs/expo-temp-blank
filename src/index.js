import { registerRootComponent } from 'expo';
import React from 'react'
import App from './App'

const entry = () => {
    return (
        <App></App>
    )
}

registerRootComponent(entry);
