import React from 'react'
import Gallery from './Gallery'
import Data from '../Data'
function Main() {
    return (
        <div className='landing-main'>
            <Gallery Data={Data()} />
        </div>
    )
};
export default Main