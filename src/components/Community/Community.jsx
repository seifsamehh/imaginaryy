import React from 'react'
import './style/community.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function Community() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <section className='community flex flex-col justify-center'>
      <div className="content ml-16" data-aos="flip-left" data-aos-duration="1500" data-aos-delay="700">
        <h1>JOIN THE<br/><span>COMMUNITY</span></h1>
        <p>We can't reply to all emails but all good vibes are appreciated! <br/>You can email us at <b>hello@imaginaryones.com</b></p>
      </div>
      <div role="presentation" onClick={handleClick} className="links ml-16">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          className='link'
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
          color="inherit"
          href="/"
        >
          Opensea
        </Link>
        <Link
          className='link'
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
          color="inherit"
          href="/"
        >
          Foundation
        </Link>
        <Link
          className='link'
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
          color="inherit"
          href="/"
        >
          Discord
        </Link>
        <Link
          className='link'
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
          color="inherit"
          href="/"
        >
          Twitter
        </Link>
        <Link
          className='link'
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}
          color="inherit"
          href="/"
        >
          Instgram
        </Link>
      </Breadcrumbs>
    </div>
    </section>
  )
}

export default Community