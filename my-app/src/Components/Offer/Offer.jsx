import React, {useEffect} from 'react'
import './Offer.css'
import { MdAirportShuttle, MdBathtub, MdKingBed } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaWifi } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
// importing the img
import myImg from '../../Assests/image-6.jpeg'
import img7 from '../../Assests/image-7.jpeg'
import img8 from '../../Assests/image-8.jpeg'
import img9 from '../../Assests/image-9.jpeg'

import Aos from "aos"
import 'aos/dist/aos.css'


const Offers = [
    {
        id : 1,
        imgSrc : myImg,
        destTitle : "Machu Picchu",
        location: "Persu",
        price : '$7,452'
    },
    {
        id : 2,
        imgSrc : img8,
        destTitle : "Gunanajuato",
        location: "Mexico",
        price : '$2,452'
    },
    {
        id : 3,
        imgSrc : img9,
        destTitle : "Angkor Wat",
        location: "Combodia",
        price : '$4,452'
    }
]


const Offer = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])


    return (
        <section className='offer container section'>
            <div className='secContainer'>


                <div className="secIntro" data-aos="fade-up" data-aos-duration="2000">
                    <h2 className="secTitle">Special Offers</h2>
                    <p>From historical cities to natural specteculars, come see the best of the world!</p>
                </div>

                <div className="mainContent grid">

                {
                    Offers.map(function({id, location , destTitle, imgSrc, price}){
                       return(
                        <div className="singleOffer" data-aos="fade-up" data-aos-duration="4000">

                        <div className="destImage">
                            <img src={imgSrc} alt={destTitle} />
                            <span className="discount">30% Off</span>
                        </div>

                        <div className="offerBody ">
                            <div className="price flex">
                                <h4>{price}</h4>
                                <span className="status">For Rent</span>
                            </div>
                            <div className='amenities flex'>
                                <div className="SingleAmenities flex">
                                    <div className="singleAmenity flex">
                                        <MdKingBed className="icon" />
                                        <small>2 Beds</small>
                                    </div>
                                </div>
                                <div className="singleAmenities flex">
                                    <div className="singleAmenity flex">
                                        <MdBathtub className="icon" />
                                        <small>1 Bath</small>
                                    </div>
                                </div>
                                <div className="singleAmenities flex">
                                    <div className="singleAmenity flex">
                                        <FaWifi className="icon" />
                                        <small>Wi-Fi</small>
                                    </div>
                                </div>
                                <div className="singleAmenities flex">
                                    <div className="singleAmenity flex">
                                        <MdAirportShuttle className="icon" />
                                        <small>Shuttle</small>
                                    </div>
                                </div>
                            </div>

                            <div className="location flex">
                                <MdLocationOn className="icon" />
                                <small>450 Vine #310, {location}</small>
                            </div>

                            <button className='btn flex'>View Details <BsArrowRightShort className='icon' /></button>
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
export default Offer;