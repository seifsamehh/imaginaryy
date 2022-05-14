import React from 'react'
import './style/team.css'
import creator from '../../videos/creator2.webm'
import biz from '../../videos/biz.webm'
import artist from '../../videos/artist.webm'
import pm from '../../videos/pm.webm'
import tech from '../../videos/tech.webm'
import { BsTwitter, BsLinkedin } from "react-icons/bs";

function Team() {
  return (
    <section className='team'>
      <h1 className='team-title mb-12' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1000">IMAGINARY <span>TEAM</span></h1>
      <div className="team-1 flex justify-around items-center mb-28">
        <div className="card-1" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1200">
          <h2 className='creator-title'>Creator</h2>
          <video autoPlay loop muted>
            <source src={creator} type='video/webm' />
          </video>
          <h1>CMTTAT</h1>
          <h3>CLEMENT</h3>
          <p>CO-FOUNDER OF IMAGINARY ONES, OFFSET & OFFEO</p>
          <div className="icons mb-10 flex items-center justify-center">
            <BsTwitter className='icon'/>
            <BsLinkedin className='icon'/>
          </div>
        </div>
        <div className="card-2" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1400">
          <h2 className='biz-title'>BIZ / STRATEGIST</h2>
          <video autoPlay loop muted>
            <source src={biz} type='video/webm' />
          </video>
          <h1>GENTLE WHALE</h1>
          <h3>DAVID</h3>
          <p>CO-FOUNDER OF IMAGINARY ONES, OFFSET & OFFEO</p>
          <div className="icons mb-10 flex items-center justify-center">
            <BsTwitter className='icon'/>
            <BsLinkedin className='icon'/>
          </div>
        </div>
      </div>
      {/* team two */}
      <div className="team-2 flex justify-around items-center">
        <div className="card-1" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1200">
          <h2 className='artist-title'>ARTIST / PARTNERSHIPS</h2>
          <video autoPlay loop muted>
            <source src={artist} type='video/webm' />
          </video>
          <h1>NINE FOOT TABLE</h1>
          <h3>GREGORY</h3>
          <p>MANAGING PARTNER OF IMAGINARY ONES, OFFSET & OFFEO</p>
          <div className="icons mb-10 flex items-center justify-center">
            <BsTwitter className='icon'/>
            <BsLinkedin className='icon'/>
          </div>
        </div>
        <div className="card-2" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1400">
          <h2 className='pm-title'>PM / COMMUNITY</h2>
          <video autoPlay loop muted>
            <source src={pm} type='video/webm' />
          </video>
          <h1>KBBY</h1>
          <h3>CALEB</h3>
          <p>OPERATIONS DIRECTOR OF IMAGINARY ONES, OFFSET & OFFEO</p>
          <div className="icons mb-10 flex items-center justify-center">
            <BsTwitter className='icon'/>
            <BsLinkedin className='icon'/>
          </div>
        </div>
        <div className="card-3" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1600">
          <h2 className='tech-title'>TECH / CONTRACTS</h2>
          <video autoPlay loop muted>
            <source src={tech} type='video/webm' />
          </video>
          <h1>MIGHTY MOUSEY</h1>
          <h3>JEROME</h3>
          <p>CHIEF TECH OFFICER OF IMAGINARY ONES, OFFSET & OFFEO</p>
          <div className="icons mb-10 flex items-center justify-center">
            <BsTwitter className='icon'/>
            <BsLinkedin className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team