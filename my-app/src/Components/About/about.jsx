import React , {useEffect} from 'react'
import './about.css'

// images-----------------------
import img1 from '..//../Assests/image-10.jpg'
import img2 from '..//../Assests/image-11.jpg'
import img3 from '..//../Assests/image-12.avif'
import video from '..//../Assests/video.mp4'

import Aos from "aos"
import 'aos/dist/aos.css'


const About = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
},[])

       return(
        <section className='about section'>
            <div className='secContainer'>

                <h2 className="title">
                    Why Hiking
                </h2>

                <div className="mainContent container grid">


                  <div className="singleItem" data-aos="fade-up" data-aos-duration="2000">
                    <img src={img1} alt="My-image" />
                    <h3>100+ Mountains</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloremque ab rem, magni cumque aliquam tempora officiis numquam sapiente praesentium labore sint. Earum est voluptate optio nihil explicabo debitis quidem.</p>
                  </div>

                  <div className="singleItem" data-aos="fade-up" data-aos-duration="2500">
                    <img src={img2} alt="My-image" />
                    <h3>1000+ Hikings</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloremque ab rem, magni cumque aliquam tempora officiis numquam sapiente praesentium labore sint. Earum est voluptate optio nihil explicabo debitis quidem.</p>
                  </div>


                  <div className="singleItem" data-aos="fade-up" data-aos-duration="3000">
                    <img src={img3} alt="My-image" />
                    <h3>2000+ Customer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloremque ab rem, magni cumque aliquam tempora officiis numquam sapiente praesentium labore sint. Earum est voluptate optio nihil explicabo debitis quidem.</p>
                  </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">

                        <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
                            <h2>Wonderful House experience nin there!</h2>
                            <p>The Adventure subranking is based on an equally weighted average of scores from five country.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
                            <video src={video} autoPlay loop muted type = "video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       )
}
export default About;