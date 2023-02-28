/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import './App.css'

import Home from 'home'
import React from 'react'

class App extends React.Component {
    componentDidCatch(error, errorInfo) {
        console.error(error)
        console.log(errorInfo)
    }

    render() {
        return <Home />
    }
}

export default App
