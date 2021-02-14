import React from 'react'
import './Viewers.css'
const Viewer = ({ photos }) => {
    return (
            <div className="collectionPhotos">
                {photos.map(photo => (
                    <img src={photo.image} alt="photo" className="photo" />
                ))}
            </div>
    )
}

export default Viewer
