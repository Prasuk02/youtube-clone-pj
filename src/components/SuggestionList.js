import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SuggestionList = ({id, channel, length, published, views, title, thumbnail}) => {
  return (
    <Box mb='3px' width='100%' height='100px' style={{overflow: 'hidden'}}>
        <Link to={`/video/${id}`} style={{textDecoration: 'none', color: 'black'}}>
            <Stack direction='row' spacing={1.2}>
                <img src={thumbnail} alt="" height='100%' style={{borderRadius: '7px'}}/>

                <Stack>
                    <Typography style={{maxHeight: '42px', overflow: 'hidden', fontFamily: 'roboto', fontWeight: '500', fontSize: '14.4px', color: 'black'}}>{title}</Typography>
                    <Typography mt='4px' style={{fontFamily: 'roboto', fontWeight: '400', fontSize: '13px', color: '#333'}}>{channel}</Typography>
                    <Stack direction='row' spacing={1} mt='-2px'>
                        <Typography style={{fontFamily: 'roboto', fontWeight: '400', fontSize: '13px', color: '#333'}}>{views >= 1000000? `${(views/1000000).toFixed(1)}M views` : views >= 1000? `${(views/1000).toFixed(1)}K views` : `${views} views`}</Typography>
                        <Typography style={{fontFamily: 'roboto', fontWeight: '400', fontSize: '13px', color: '#333'}}>{published}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Link>
    </Box>
  )
}

export default SuggestionList
