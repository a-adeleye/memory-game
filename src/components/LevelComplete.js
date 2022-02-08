import React from 'react';
import rubik from '../rubik.png'

export default function LevelComplete(props) {
    return(
        <div className='levelComplete'>
            <h2 className='level-complete--title'>Level {props.level} completed</h2>
            <img className='level-complete--image' alt='' src={rubik}/>
        </div>
    )
}