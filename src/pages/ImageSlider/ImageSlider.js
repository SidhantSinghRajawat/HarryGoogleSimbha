import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        //array // if it is last image we are sending it back to first image
    }
    const preSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current);
    if (!Array.isArray(slides) || slides.length <= 0) {
        // if we have no data or data file is not in array
        return null;
    }
    return (

            <section className="slider background" >
                <FaArrowAltCircleLeft className="left-arrow" onClick={preSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (<div className={index === current ? 'slide active' : 'slide'} key={index}>
                        { index === current && (
                            <div className="imageContainer">
                                <img src={slide.image} alt="Wait A Second...." className="image" />

                            </div>)}
                    </div>
                    )
                })}
            </section>

    )
}

export default ImageSlider
