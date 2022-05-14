import React from 'react'
import './style/faq.css'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function Faq() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className='faq'>
      <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="900">FAQ</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="box">
          <Typography className="head">Who's the team behind imaginary ones?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="para">
          We have been entrepreneurs and 3D motion artists for over a decade. Our notable clients are Nike, Apple, Samsung, Heineken, Spotify, and L'oreal.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className="box">
          <Typography className="head">What makes imaginary ones so unique?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="para">
          Imaginary Ones is the brainchild of an award-winning creative director, Clement (Cmttat). We have positioned our brand and design to appeal to people of all ages.
          </Typography>
          <Typography className="para">
          Holders can expect more collections with excellent quality and long-term utility in the Imaginary World ecosystem.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  )
}

export default Faq