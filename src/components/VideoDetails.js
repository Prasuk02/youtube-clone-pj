import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Stack, Typography, TextField} from '@mui/material'
import VideoPlayer from './VideoPlayer'
import { fetchData, FetchDataOptionsV1 } from '../utils/FetchData'
import SuggestionList from './SuggestionList'
import { Context } from '../context/ContextApi'
import profile from '../images/profile.png'
import CommentCard from './CommentCard'
import '../components/Css/commentScrollbar.css'

const VideoDetails = () => {
  const {setLoading} = useContext(Context)
  const {id} = useParams()
  // const [videoPlayerData, setVideoPlayerData] = useState({})               XXXXXXXX GALTI HO RAHI THI 1 DIN BARBAAD
  const [videoPlayerData, setVideoPlayerData] = useState()
  const [relatedVideos, setRelatedVideos] = useState()
  const [videoComments, setVideoComments] = useState()

  let totalComments = videoPlayerData?.stats?.comments
  
  useEffect(() => {
    const videoDetails = async() => {
      console.log("Called")
      setLoading(true)
      const fetchVideoDetails = await fetchData(`https://youtube138.p.rapidapi.com/video/details/?id=${id}`, FetchDataOptionsV1)
      setVideoPlayerData(fetchVideoDetails)
      setLoading(false)
    }

    const relatedVideoDetails = async() => {
      setLoading(true)
      const videosList = await fetchData(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}`, FetchDataOptionsV1)
      setRelatedVideos(videosList.contents)
      setLoading(false)
    }

    const fetchComments = async() => {
      setLoading(true)
      const fetchedComments = await fetchData(`https://youtube138.p.rapidapi.com/video/comments/?id=${id}`, FetchDataOptionsV1)
      setVideoComments(fetchedComments.comments)
      setLoading(false)
    }

    videoDetails()
    relatedVideoDetails()
    fetchComments()
  }, [id])

  // console.log(`id = ${id}`)
  console.log(videoPlayerData)
  // console.log(relatedVideos)
  // console.log(videoComments)
  // console.log(videoPlayerData?.title)
  // console.log(videoPlayerData?.author.title)
  // console.log(videoPlayerData?.author.avatar[0].url)
  // console.log(videoPlayerData?.author.stats.subscribersText)
  // console.log(videoPlayerData?.stats.comments)
  // console.log(videoPlayerData?.stats.views)
  return (
    <>
      <Stack direction='row'>
        <Box width='66%' py='22px' pl='34px' pr='2px'>
          <VideoPlayer 
            id={id}
            channelId={videoPlayerData?.author?.channelId}
            title={videoPlayerData?.title}
            superTitle={videoPlayerData?.superTitle.items[0]}
            channel={videoPlayerData?.author.title}
            avatar={videoPlayerData?.author.avatar[2].url}
            subscriber={videoPlayerData?.author.stats.subscribersText}
            description={videoPlayerData?.description}
            publishedDate={videoPlayerData?.publishedDate}
            comments={videoPlayerData?.stats.comments}
            likes={videoPlayerData?.stats.likes}
            views={videoPlayerData?.stats.views}
            />

            {/* Comment section */}
            <Box mt='24px' width='100%' height='100px'>
              <Typography style={{fontFamily: 'roboto', fontWeight: '500', fontSize: '15.5px'}}>{totalComments >= 1000? `${(totalComments/1000).toFixed(2)}K Comments` : `${totalComments} Comments`}</Typography>

              <Stack mt='22px' direction='row' alignItem='flex-start' spacing={1.5}>
                <img src={profile} alt=""/>
                <TextField 
                  sx={{border: 'none',"& fieldset": { border: 'none' },}}
                  style={{width: '94%'}}
                  variant="standard"
                  placeholder='Add a comment...'
                />
              </Stack>

              <Stack className='commentBox' mt='13px' style={{maxHeight: '1222px', overflow: 'auto'}}>
                {videoComments?.map((element) => {
                  return(
                    <CommentCard 
                      avatar={element.author.avatar[1].url}
                      channelId={element.author.channelId}
                      title={element.author.title}
                      content={element.content}
                      published={element.publishedTimeText}
                      replies={element.stats.replies}
                      votes={element.stats.votes}
                    />
                  )
                })}
              </Stack>
            </Box>
        </Box>

        {/* Sidebar suggestion videos */}
        <Box width='34%' pt='22px' pb='8px' pl='21px' pr='32.5px'>
          {relatedVideos?.map((element) => {
            return(
              <SuggestionList
                id={element?.video?.videoId}
                channel={element?.video?.author?.title}
                length={element?.video?.author?.lengthSeconds}
                published={element?.video?.publishedTimeText}
                views={element?.video?.stats?.views}
                title={element?.video?.title}
                thumbnail={element?.video?.thumbnails[0]?.url}
              />
            )
          })}
        </Box>
      </Stack>
    </>
  )
}

export default VideoDetails
