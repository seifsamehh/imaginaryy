import React from 'react'
import './style/vibes.css'
import video from '../../videos/nft.webm'
import textBg from '../../videos/text-bg.webm'
import creator from '../../videos/creator.webm'

function Vibes() {
  return (
    <section className='vibes'>
      <div className="upper flex items-start">
        <p class="popout" data-aos="fade-right" data-aos-duration="1000">
          <span>W</span>
          <span>E</span>
          &nbsp;
          <span>A</span>
          <span>R</span>
          <span>E</span>
          <br/>
          <span>G</span>
          <span>O</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          &nbsp;
          <span>T</span>
          <span>O</span>
          <br/>
          <span>V</span>
          <span>I</span>
          <span>B</span>
          <span>E</span>
          <br/>
          <span>I</span>
          <span>T</span>
        </p>
        <video autoPlay loop muted>
          <source src={video} type='video/webm' />
        </video>
      </div>
      <div className="footer flex">
        <div className="video" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
          <video autoPlay loop muted>
            <source  src={textBg} type='video/webm' />
          </video>
          <h1 className='title flex justify-center'>#IONS</h1>
        </div>
        <div className="bot" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
          <video autoPlay loop muted>
            <source  src={creator} type='video/webm' />
          </video>
        </div>
        <div className="text" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
          <h1 className='flex justify-center'>GOOD VIBES</h1>
        </div>
      </div>
    </section>
  )
}

export default Vibes