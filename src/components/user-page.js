import React from 'react';
import NavigationBar from './navigation-bar.js'
require('../styles/user-page.css')

class UserPage extends React.Component{
    render() {
        return (
            <div>
                <NavigationBar />
                <div className='container'>
                    <div className='head'>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='function-box'>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage;