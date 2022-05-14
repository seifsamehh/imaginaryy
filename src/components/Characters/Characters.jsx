import React from 'react'
import './style/character.css'
import characters from '../../videos/charcters.webm'

function Characters() {
  return (
    <section className='characters'>
      <div className="upper-part flex justify-center">
        <span>.IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
      </div>
      <div className="middle-part">
        <video loop autoPlay muted>
          <source src={characters} type="video/webm" />
        </video>
      </div>
      <div className="footer-part flex justify-center">
        <span>.IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
        <span>IMAGINARY ONE COLLECTION.</span>
      </div>
    </section>
  )
}

export default Characters