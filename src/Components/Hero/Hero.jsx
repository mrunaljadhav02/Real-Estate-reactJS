import React from 'react'
import "./Hero.css"
import { ImLocation } from "react-icons/im";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    
      <section className="hero-wrapper">
        <div className=" paddings innerWidth flexCenter hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    
                    <motion.h1
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                >
                    Discover <br/>
                    Most Suiteble <br/> 
                    Property</motion.h1>
                    
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, nulla.</span>
                    <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, laudantium!</span>
                </div>
                <div className="flexCenter search-bar">
                    <ImLocation color ="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>
                <div className=" flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start = {8800} end={9000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'> Premium Products</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start = {1950} end={2000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customer</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>
            </div>

                    {/* right side */}
            <div className="flexCenter hero-rigth">
            <motion.div
            initial={{x: "7rem", opacity:0}}
            animate={{x: 0, opacity:1}}
            transition={{
                duration: 2,
                type: "spring"
            }}
             className="image-container">
                <img src="./hero-image.png" alt="" />
                </motion.div>

            </div>
        </div>
      </section>
    
  );
}

export default Hero
