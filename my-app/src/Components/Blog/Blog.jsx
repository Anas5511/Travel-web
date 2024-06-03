import React, {useEffect} from 'react'
import './Blog.css'
import { BsArrowRightShort } from "react-icons/bs";

// importing the images to my website
import img1 from '..//../Assests/image-13.jpeg'
import img2 from '..//../Assests/image-14.jpeg'
import img3 from '..//../Assests/image-15.jpeg'
import img4 from '..//../Assests/image-16.jpeg'


import Aos from "aos"
import 'aos/dist/aos.css'

const posts = [
    {
        id : 1,
        postImage : img1,
        title : 'Beautiful Moroco, let us travel!',
        desc : 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
    },
    {
        id : 2,
        postImage : img2,
        title : 'Romantic moments under Eiffel Tower',
        desc : 'with vast swaths of desert in its east and west the rich Nile River Valley at its heart, is site to one of the worlds earliest and greatest civilizations'
    },
    {
        id : 3,
        postImage : img3,
        title : 'Let us have an adventure outside Tunisia.',
        desc : 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
    },
    {
        id : 4,
        postImage : img4,
        title : 'Best Country in East Africa',
        desc : 'When Kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republic prometed a sense of national unity using the motto.'
    }
]

const Blog = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])

    return(
        <section className='blog container section'>
            <div className="secContainer">

                <div className="secIntro">
                    <h2 className="secTitle" data-aos="fade-up" data-aos-duration="2000">Our Best Blog?</h2>
                    <p data-aos="fade-up" data-aos-duration="2500">An insight to the incredible esperince in the world.</p>
                </div>

                <div className="mainContainer grid">
                 {
                    posts.map(function( {postImage, title, desc }){
                        return(
                            <div className="singlePost grid">
                            <div className="imgDiv">
                                <img src= {postImage} alt="" />
                            </div>
    
                            <div className="postDetails">
                                <h3 data-aos="fade-up" data-aos-duration="3000">{title}</h3>
                                <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
                            </div> 
    
                            <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500">
                            Read More
                            <BsArrowRightShort  className = "icon"/>

                            
                            </a>
                        </div>
                        )
                    })
                 }
                </div>
            </div>
        </section>
    )
}
export default Blog;