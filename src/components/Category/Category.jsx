import React from 'react'
import './style/category.css'

function Category() {
  return (
    <section className='category flex items-center'>
      <div className="left-part">
        <h1 className='one'>Imaginations</h1>
        <h1 className='two'>Partnerships</h1>
        <h1 className='three'>Community</h1>
        <h1 className='four'>Metaverse</h1>
        <h1 className='five'>in real life</h1>
      </div>
      <div className="right-part" data-aos="zoom-in" data-aos-duration="1000">
        <div className="content-box">
          <p className='special-para'>Community building is our priority, and it is vital to continuously engage, grow and protect fellow Ions for long-term brand building.</p>
          <div className="seeking">
            <h3>Full-time moderation team <span>(Seeking)</span></h3>
            <p>A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.</p>
          </div>
          <div className="excute">
            <h3>Engaging spaces <span>(Executing)</span></h3>
            <p>At Imaginary Ones, your fellow ions are like your second family. #ionsfollowions and #ionssupportions forever! We aim to foster a closely-knitted community that can rub our expertise off one another and lift each other up to greater heights.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category