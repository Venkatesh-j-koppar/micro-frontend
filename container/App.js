import React from 'react'
import {mount} from 'marketing/MarketingApp'
import MarketingApp from './src/component/MarketingApp'

const App = () => {
    console.log('printing the value of marketing',mount)
    return (
        <div>
        <h1>Inside App</h1>
        <MarketingApp/>
        </div>
    )
}


export default App