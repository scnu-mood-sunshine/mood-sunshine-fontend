import React from 'react';
require('../styles/user-dynamic.css')

function Dynamic(){
    let dynamicBox =
    <li className='dynamic-box'>
        <div className='img-box'>
        </div>
        <div className='text-container'>
            <div className='text'>
                物质永远无法得到满足，精神却可以被轻易慰籍。
                物质永远无法得到满足，精神却可以被轻易慰籍。
                物质永远无法得到满足，精神却可以被轻易慰籍。
            </div>
            <div className='read-full-option'>
                查看全文
            </div>
            <div className='read-full-option time-box'>
                20:30 3月19日
            </div>
        </div>
        <hr className='hr'></hr>
    </li>
    return(dynamicBox)
}

class UserDynamic extends React.Component{
    render(){
        return(
            <ul>
                <Dynamic />
                <Dynamic />
                <Dynamic />
                <Dynamic />
                <Dynamic />
            </ul>
        )
    }
}

export default UserDynamic;