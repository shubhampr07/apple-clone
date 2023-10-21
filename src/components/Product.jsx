import React from 'react'
import {Box, Typography, styled} from '@mui/material'


const Component = styled(Box)({
  width: '100%',
  height: 480,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 55,
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  margin: '0 5px'
})

const Heading = styled(Typography)({
  fontWeight: 600,
  fontSize: 56
})

const SubHeading = styled(Typography)({
  fontSize: 25,
  padding: '10 0 5px 0' 
})



const Product = ({ data }) => {
  return (
    <Component style={{background: `url(${data.imageURL}) 50% 50% no-repeat`, marginTop: '15px'}}>
      <Heading style={{color: data.headColor}}>{data.heading}</Heading>
      <SubHeading style={{color: data.subHeadColor}}>{data.subHeading}</SubHeading>
      
    </Component>
  )
}

export default Product
