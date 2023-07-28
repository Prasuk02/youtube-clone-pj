import React, { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import channel_icon from '../utils/channel_icon.jpg'
import { Link } from 'react-router-dom';
import SensorsIcon from '@mui/icons-material/Sensors';
import { fetchData, FetchDataOptionsV1 } from '../utils/FetchData'

const VideoCards = ({channelId, video_id, thumbnail, title, length, author, views, published}) => {
  // const [url, setUrl] = useState()
  
  // useEffect(() => {
  //   const fetchChannelImg = async() => {
  //     const img = await fetchData(`https://youtube138.p.rapidapi.com/channel/details/?id=${channelId}`, FetchDataOptionsV1)
  //     setUrl(img)
  //   }

  //   fetchChannelImg()
  // }, [channelId])

  // console.log('url')
  // console.log(url)
  return (
    <>
        <Box width='23.9%' mb='37px'>
        <Link to={`/video/${video_id}`} style={{textDecoration: 'none'}}>
          <Stack>
            <Box style={{position: 'relative'}}>
              <img src={thumbnail} alt="Video-Thumbnail" width='100%' style={{borderRadius: '10px'}}/>
              <Typography 
                style={{
                  fontFamily: 'Roboto', 
                  letterSpacing: '1px',
                  fontWeight: '400', 
                  fontSize: '12px', 
                  color: '#fff', 
                  backgroundColor: length == 0? '#ff0000' : '#000', 
                  opacity: '0.83',
                  padding: '0px 5px',
                  position: 'absolute',
                  bottom: '8px',
                  right: '3px',
                  borderRadius: '4px'
                  }}>{length != 0? (length) : (<Stack direction='row' alignItems='center'><SensorsIcon style={{width: '19px', marginRight: '2px'}}/>Live</Stack>)}</Typography>
            </Box>
            <Stack direction='row' alignItems='flex-start' spacing={1} mt="10px">
              <Box><AccountCircleIcon style={{fontSize: '36px', color: '#222'}}/></Box>
              {/* <Box><img src={url?.avatar?.[2]?.url} alt="" width='36px' style={{borderRadius: '50%'}}/></Box> */}
              <Stack>
                <Typography style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#111', maxHeight: '47px', overflowY: 'hidden'}}>{title}</Typography>
                <Typography style={{marginTop: '3px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '14.5px', color: '#444', maxHeight: '22px', overflowY: 'hidden'}}>{author != ''? author : ''}</Typography>
                <Stack direction='row' spacing={1} mt='-2px'>
                  <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', color: '#444'}}>
                    {views == 0? 
                      'Watching Live' : views >= 1000000?
                      `${(views/1000000).toFixed(1)}M views` : views >= 100000?
                       `${(views/1000).toFixed(0)}K views` : views >= 10000? 
                       `${(views/1000).toFixed(0)}K views` : views >= 1000? 
                        (`${(views/1000).toFixed(1)}K views`): `${views} views`}</Typography>
                  <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '14px', color: '#444'}}>{published}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Link>
        </Box>
    </>
  )
}

export default VideoCards
