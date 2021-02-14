import React from 'react'
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData'
import './ImageSlider.css'
function App(){
  return(
    <div className="imageBg">
      <ImageSlider slides={SliderData} />
    </div>
  )
}
export default App