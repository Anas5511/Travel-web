import React,{useEffect} from 'react'
import './Footer.css'
import { MdCardTravel } from "react-icons/md";
import { AiFillInstagram } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';


import Aos from "aos"
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])

    return (
        <div className='footer'>
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className='flex'><MdCardTravel className='icon' />Dot</h1>
                        </a>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className="socials flex">
                    <ImFacebook className = "icon"/>
                    <BsTwitter className = "icon"/>
                    <AiFillInstagram className = "icon"/>
                  </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Blog</a></li>

                </div>

                <div className="footerLinks" data-aos="fade-up" data-aos-duration="4000">
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Travel & Condition</a></li>
                    <li><a href="#">Privacy</a></li>

                </div>



                <div className="footerLinks" data-aos="fade-up" data-aos-duration="5000">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className="phone">+81 679 500</span>
                    <span className="email"> mhab36817@gmail.com </span>

                </div>

                  

            </div>
        </div>
    )
}
export default Footer;