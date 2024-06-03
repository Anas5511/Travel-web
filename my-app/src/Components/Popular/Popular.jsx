import React , {useEffect} from 'react'
import './Popular.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";



import img1 from "../../Assests/image-1.jpeg"
import img2 from '../../Assests/image-5.jpeg'
import img3 from '../../Assests/image-3.jpeg'
import img4 from '../../Assests/image-4.jpeg'


import Aos from "aos"
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Machu Picchu",
        location: 'Peru',
        grade: 'CULTURAL RELAX'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: "Guanajuato",
        location: 'Mexico',
        grade: 'CULTURAL RELAX'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: "Angkor Wat",
        location: 'Cambodia',
        grade: 'CULTURAL RELAX'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: "Taj Mahal",
        location: 'Indai',
        grade: 'CULTURAL RELAX'
    }
]


const Popular = () => {


    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])


    return (
        <section className='popular section container'>
            <div className="secContainer">

                <div className="secHeader flex">
                    <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                        <h2 className='secTitle'>Popular Destination</h2>
                        <p>From historical cities to natural specteculars, come see the best of the world!</p>
                    </div>

                    <div className="iconsDiv flex" data-aos="fade-left" data-aos-duration="2500">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon' />
                    </div>

                </div>

                <div className="mainContent grid">
                    {
                        Data.map(function ({id, imgSrc, destTitle, location, grade}) {
                            return (
                                <div data-aos="fade-up" className="singleDestination">
                                    <div className="destImage">

                                        <img src={imgSrc} alt="" />

                                        <div className="overlayInfo">
                                            <h3>{destTitle}</h3>
                                            <p>Lorem ipsum dolor sit amet.</p>

                                            <BsArrowRightShort className='icon' />
                                        </div>
                                    </div>

                                    <div className="destFooter">
                                        <div className="number">0{id}</div>
                                        <div className="destText flex">
                                            <h6>{location}</h6>
                                            <span className='flex'>
                                                <span className='dot'>
                                                    <BsDot className='icon' />
                                                </span>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}
export default Popular;