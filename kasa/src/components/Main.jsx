import React from 'react'
import Gallery from './Gallery'
import Data from './Data'
function Main() {
    return (
        <div className='main-page'>
            <Gallery Data={Data()} />
        </div>
    )
};

export default Main