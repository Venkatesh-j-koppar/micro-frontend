import {mount} from 'marketing/MarketingApp'
import React,{useEffect,useRef} from 'react'

const MarketingApp = () => {
    const r1 = useRef(null)
    useEffect(() => {
        mount(r1.current)
    })
    return (
        <div ref={r1}></div>
    )
}

export default MarketingApp