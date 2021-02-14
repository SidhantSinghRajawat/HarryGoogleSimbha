import React from 'react'
import Photos from './Photos'
import './App.css'
// import './PhotoPage.css'
import Viewer from './Viewers'
const PhotoApp = () => {
    return (
        <div className="container">
           <Viewer photos={Photos} />
        </div>
    )
}

export default PhotoApp
