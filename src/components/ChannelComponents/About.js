import { Stack, Box, Typography } from '@mui/material'
import React from 'react'

const About = ({description, location, joinedDate, subscriber, videos, views, links}) => {
  return (
    <>
      <Stack mt='20px' direction='row' justifyContent='space-between' alignItems='flex-start'>
        <Box width='65%'>
          <Typography style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: '16.5px', color: '#111'}}>Description</Typography>
          <Typography mt='20px' style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '14.5px', color: '#333'}}>{description}</Typography>
          
          <hr style={{margin: '30px 0px'}}/>
          
          <Typography style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: '15px', color: '#111'}}>Details</Typography>
          <Typography mt='5px' style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '13px', color: '#111'}}>Location: {location}</Typography>
          
          <hr style={{margin: '30px 0px'}}/>
          <Typography style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: '15px', color: '#111'}}>Links</Typography>
          <Stack mt='10px' direction='row' alignItems='center' spacing={10}>
            <Box>
              {links?.slice(0, (links?.length/2)).map((link) => {
                return(
                  <Stack my='10px' direction='row' alignItems='center' spacing={2}>
                    <img src={link.icon} alt=""/>
                    <a href={link.targetUrl} style={{textDecoration: 'none', fontFamily: 'Roboto', fontWeight: '400', fontSize: '15px', color: '#111'}}>{link.title}</a>
                  </Stack>
                )
              })}
            </Box>

            <Box>
              {links?.slice((links?.length/2), links?.length).map((link) => {
                return(
                  <Stack my='10px' direction='row' alignItems='center' spacing={2}>
                    <img src={link.icon} alt=""/>
                    <a href={link.targetUrl} style={{textDecoration: 'none', fontFamily: 'Roboto', fontWeight: '400', fontSize: '15px', color: '#111'}}>{link.title}</a>
                  </Stack>
                )
              })}
            </Box>
          </Stack>
        </Box>


        <Box width='25%'>
          <Typography style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#111'}}>Stats</Typography>
          <hr style={{margin: '15px 0px'}}/>
          <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', color: '#111'}}>{joinedDate}</Typography>
          <hr style={{margin: '15px 0px'}}/>
          <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', color: '#111'}}>{views >= 1000000? `${(views/1000000).toFixed(1)}M views`: views >= 1000? `${(views/1000).toFixed(2)}K views`: `${views} views`}</Typography>
          <hr style={{margin: '15px 0px'}}/>
          <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', color: '#111'}}>{subscriber}</Typography>
          <hr style={{margin: '15px 0px'}}/>
          <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', color: '#111'}}>{videos} videos</Typography>
        </Box>
      </Stack>
    </>
  )
}

export default About
