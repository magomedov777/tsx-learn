import React, { useState } from 'react'


type PropsType = {
    on: boolean
}

export const OnOff = (props: PropsType) => {
    //debugger
   let[on, setOn] = useState(false)
  
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: on ? 'green' : 'white'
        
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: on ? 'white' : 'red'
}
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
}
    return (
        <div className={'AppX'}>
            <div style={onStyle} onClick={ () => {setOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => {setOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
