import React from 'react'
import {Box, Typography, styled} from '@mui/material'


const Component = styled(Box)({
  width: '100%',
  height: 580,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 45,
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat'
})

const Heading = styled(Typography)({
  fontWeight: 600,
  fontSize: 56
})

const SubHeading = styled(Typography)({
  fontSize: 25,
  padding: '0 0 5px 0' 
})

const LearnBuy = styled(Typography)({
  cursor: 'pointer'
})

const linkStyle = { color: '#2997ff', margin: 15, fontSize: 20}

const Section = ({ data }) => {
  return (
    <Component style={{background: `url(${data.imageURL}) 50% 50% no-repeat`}}>
      <Heading style={{color: data.headColor}}>{data.heading}</Heading>
      <SubHeading style={{color: data.subHeadColor}}>{data.subHeading}</SubHeading>
      <Typography>
        <LearnBuy component="span" style={linkStyle} >Learn More &gt;</LearnBuy>
        <LearnBuy component="span" style={linkStyle} >Buy &gt;</LearnBuy>
      </Typography>
    </Component>
  )
}

export default Section
