import React from 'react'
import ReactDom from 'react-dom'
import App from "./App"
export const mount = (ele) => {
    ReactDom.render(
        <App/>,ele
    )
}

if(process.env.NODE_ENV === "development"){
    const ele = document.getElementById("_marketing_page")
    if(ele){
        console.log('Printing the value of ele',ele)
        mount(ele)
    }
}

