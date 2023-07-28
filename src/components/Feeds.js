import React, { useContext, useEffect } from 'react'
import SidebarMenu from './SidebarMenu'
import { Stack, Box } from '@mui/material'
import { Context } from '../context/ContextApi'
import VideoCards from './VideoCards'


const Feeds = () => {
  const {loading, searchResult} = useContext(Context)
  
  let videosPerRow = 4
  let videoSliceLastIndex = (searchResult?.length - (searchResult?.length % videosPerRow))

  return (
    <>
      <Stack direction='row' alignItems='flex-start'>
        <Box width='17%' px='10px' pt='11px'
          style={{height: '90vmin', overflowY: 'auto', position: 'sticky', top: '56px', left: '0px'}}>
            <SidebarMenu/>
        </Box>

        <Box width='100%' pt='20px'>
          <Stack direction="row" justifyContent='space-evenly' flexWrap='wrap'>
            {!loading && searchResult?.slice(0, videoSliceLastIndex).map((video) => {
              return(

                <VideoCards 
                  channelId={video.channel_id}
                  video_id={video.video_id}
                  thumbnail={video.thumbnails[0].url}
                  title={video.title}
                  length={video.video_length}
                  author={video.author}
                  views={video.number_of_views}
                  published={video.published_time}
                  />
              )
            })}
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default Feeds
