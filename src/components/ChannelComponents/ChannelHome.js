import { Stack, Box, Typography} from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import {useState, useEffect} from 'react'
import { fetchData, FetchDataOptionsV1 } from '../../utils/FetchData'
import { Link } from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Videos from './Videos'

const ChannelHome = ({id, title, published, views, videoData}) => {
  const [videoDesc, setVideoDesc] = useState('')
  useEffect(() => {
    const fetchDetails = async() => {
      const data = await fetchData(`https://youtube138.p.rapidapi.com/video/details/?id=${id}`, FetchDataOptionsV1)
      setVideoDesc(data.description)
    }

    fetchDetails()
  }, [id])

  // console.log(videoDesc)
  return (
    <>
      <Stack mt='10px' direction='row' alignItems='center' spacing={3} >
        <Box width='39.1%' height='225px'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='100%' />
        </Box>


        <Box width='44%'>
          <Stack>
            <Typography style={{fontSize:'16px', fontFamily: 'Roboto', fontWeight: '500', color: '#000'}}>{title}</Typography>

            <Stack direction='row' alignItems='center' spacing={1} my='15px'>
              <Typography style={{fontSize:'13.4px', fontFamily: 'Roboto', fontWeight: '400', color: '#333'}}>{views >= 1000000? `${(views/1000000).toFixed(2)}M views`: views >= 1000? `${(views/1000).toFixed(2)}K views`: `${views} views`}</Typography>
              <FiberManualRecordIcon style={{fontSize: '4px', color: '#444'}}/>
              <Typography style={{fontSize:'13.4px', fontFamily: 'Roboto', fontWeight: '400', color: '#333'}}>{published}</Typography>
            </Stack>

            <Typography mb='7px' style={{textAlign: 'justify', fontSize:'14px', fontFamily: 'Roboto', fontWeight: '400', color: '#2f2f2f', maxHeight: '106px', overflow: 'hidden'}}>{videoDesc}</Typography>
            <Link to={`/video/${id}`} style={{textDecoration: 'none'}}>
              <span style={{fontSize:'14px', fontFamily: 'Roboto', fontWeight: '500', color: '#2f2f2f', marginTop: '0px'}}>Show More</span>
            </Link>
          </Stack>
        </Box>
      </Stack>


      {/* videos */}
      <Box mt='50px' width='100%'>
        <Typography style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: '19px', color: '#111'}}>SOME TOP HIT VIDEOS</Typography>
        <Typography mb='15px' style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '16px', color: '#333'}}>Presenting this Years biggest content Released!!🎇 🎉 This Playlist is specially curated for our <br/>biggest and favourite fans, Enjoy and do let us know in the comments section.</Typography>
        {videoData && <Videos videoData={videoData}/>}
      </Box>
    </>
  )
}

export default ChannelHome
