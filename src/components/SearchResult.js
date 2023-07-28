import React, { useContext, useState, useEffect } from 'react'
import SidebarMenu from './SidebarMenu'
import { Stack, Box, Typography } from '@mui/material'
import { Context } from '../context/ContextApi'
import { fetchData, FetchDataOptionsV1, FetchDataOptionsV2 } from '../utils/FetchData'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SearchResult = () => {
  const [queryResult, setQueryResult] = useState()
  const {searchQuery} = useParams()
  const {setLoading, loading} = useContext(Context)

  useEffect(() => {
    const fetchDetails = async() => {
      setLoading(true)
      const data = await fetchData(`https://youtube138.p.rapidapi.com/search/?q=${searchQuery}`, FetchDataOptionsV1)
      setQueryResult(data.contents)
      setLoading(false)
    }        
    // if api return undefined check if useEffect function called or not
    fetchDetails()
  }, [searchQuery])
  
  console.log(queryResult)
  // console.log(searchQuery)
  return (
    <>
      <Stack direction='row' alignItems='flex-start'>
        <Box width='17%' px='10px' pt='11px'
          style={{height: '90vmin', overflowY: 'auto', position: 'sticky', top: '56px', left: '0px'}}>
            <SidebarMenu/>
        </Box>

        <Box width='78.5%' pt='20px' m='auto'>
          <Stack>
            {!loading && queryResult?.map((video) => {
              return(
                <Box width='100%' height='200px' mb='20px' style={{overflow: 'hidden'}}>
                  <Link to={`/video/${video?.video?.videoId}`} style={{textDecoration: 'none'}}>
                    <Stack direction='row' alignItems='flex-start' spacing={2}>
                      <img src={video?.video?.thumbnails?.[1]?.url} alt="" width='33.5%' style={{borderRadius: '10px'}}/>

                      <Box width='600px'>
                        <Typography style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: '17px', color: '#111'}}>{video?.video?.title}</Typography>
                        
                        <Stack direction='row' alignItems='center' spacing={1} mt='-2px'>
                          <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '13.5px', color: '#444'}}>
                            {video?.video?.stats?.views == 0? 
                              'Watching Live' : video?.video?.stats?.views >= 1000000?
                              `${(video?.video?.stats?.views/1000000).toFixed(1)}M views` : video?.video?.stats?.views >= 100000?
                              `${(video?.video?.stats?.views/1000).toFixed(0)}K views` : video?.video?.stats?.views >= 10000? 
                              `${(video?.video?.stats?.views/1000).toFixed(0)}K views` : video?.video?.stats?.views >= 1000? 
                                (`${(video?.video?.stats?.views/1000).toFixed(1)}K views`): `${video?.video?.stats?.views} views`}</Typography>
                          <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '13.5px', color: '#444'}}>{video?.video?.publishedTimeText}</Typography>
                        </Stack>
                        
                        <Stack direction='row' alignItems='center' spacing={1} my='10px'>
                          <img src={video?.video?.author?.avatar[0]?.url} alt="" width='32px' style={{borderRadius: '50%'}}/>
                          <Typography style={{marginTop: '3px', fontFamily: 'Roboto', fontWeight: '400', fontSize: '15px', color: '#444'}}>{video?.video?.author?.title}</Typography>
                        </Stack>

                        <Typography style={{fontFamily: 'Roboto', fontWeight: '400', fontSize: '13.5px', color: '#444'}}>{video?.video?.descriptionSnippet}</Typography>

                        <Stack direction='row' alignItems='center' spacing={1} my='7px'>
                          {(video?.video?.badges)?.map((badge) => {
                            return(
                              <span style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: '12px', color: '#555', backgroundColor: '#ddd', padding: '2px 5px', borderRadius: '3px'}}>{badge}</span>
                            )
                          })}
                        </Stack>
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              )
            })}
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
// video_id={video.video_id}
// length={video.video_length}

export default SearchResult
