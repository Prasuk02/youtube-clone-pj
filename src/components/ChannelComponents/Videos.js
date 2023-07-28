import { Box, Stack} from '@mui/material'
import React from 'react'
import VideoCards from '../VideoCards'

const Videos = ({videoData}) => {
  let videoPerRow = 4
  let videoSliceIndex = (videoData?.length - (videoData?.length % videoPerRow))
  console.log(videoData)
  return (
    <>
      <Box width='100%' mt='10px'>
        <Stack direction="row" justifyContent='space-between' flexWrap='wrap'>
          {videoData?.slice(0, videoSliceIndex)?.map((ele) => {
            return(
              <VideoCards 
                video_id={ele.video.videoId}
                thumbnail={ele.video.thumbnails[3].url}
                title={ele.video.title}
                length={ele.video.lengthSeconds}
                author={''}
                views={ele.video.stats.views}
                published={ele.video.publishedTimeText}
              />
            )
          })}
        </Stack>
      </Box>
    </>
  )
}

export default Videos
