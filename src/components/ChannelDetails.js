import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Stack, Box, Typography, Tab} from '@mui/material'
import SidebarMenu from './SidebarMenu'
import { fetchData, FetchDataOptionsV1 } from '../utils/FetchData'
import {TabContext, TabList, TabPanel} from '@mui/lab';
import '../components/Css/channel.css'
import ChannelHome from './ChannelComponents/ChannelHome'
import About from './ChannelComponents/About'
import Community from './ChannelComponents/Community'
import Videos from './ChannelComponents/Videos'

const ChannelDetails = () => {
    const {id} = useParams()
    const [channelData, setChannelData] = useState()
    const [videoData, setVideoData] = useState()
    const [communityData, setCommunityData] = useState()

    // TAB CONTEXT VALUE TO BE BY-DEFAULT SET IN STRING
    const [tabIndex, setTabIndex] = useState('1')

    // seleting random video for channel home page
    // const is used so that value only changes on refresh
    let selectHomeVideo = Math.floor(Math.random() * videoData?.length)
    let selectRandomVideo = Math.floor(Math.random() * (videoData?.length - 8))

    // pagination and tab by default passes the event & index of clicked tab
    const tabChange = (event, index) => {
        setTabIndex(index)
    }

    useEffect(() => {
        const fetchChannelData = async() => {
            const fetchInfo = await fetchData(`https://youtube138.p.rapidapi.com/channel/details/?id=${id}`, FetchDataOptionsV1)
            setChannelData(fetchInfo)

            const fetchVideos = await fetchData(`https://youtube138.p.rapidapi.com/channel/videos/?id=${id}`, FetchDataOptionsV1)
            setVideoData(fetchVideos.contents)

            const fetchCommunity = await fetchData(`https://youtube138.p.rapidapi.com/channel/community/?id=${id}`, FetchDataOptionsV1)
            setCommunityData(fetchCommunity.contents)
        }
        fetchChannelData()
    }, [id])

    console.log('channelData')
    console.log(channelData)
    // console.log('videoData')
    // console.log(videoData)
    // console.log('communityData')
    // console.log(communityData)
    return (
        <>
            <Stack direction='row' pr='15px'>
                <Box width='17%' px='10px' pt='11px'
                    style={{height: '90vmin', overflowY: 'auto', position: 'sticky', top: '56px', left: '0px'}}>
                        <SidebarMenu/>
                </Box>

                <Box width='83%' mt='0px' >
                    <Stack>
                        <img src={channelData?.banner?.desktop[5].url} alt="" width='100%'/>

                        {/* avatar & name */}
                        <Stack direction='row' justifyContent='space-between' alignItems='flex-start' mt='26px' px='35px'>
                            <Stack direction='row' spacing={3} alignItems='center' >
                                <img src={channelData?.avatar[2].url} alt="" width='120px' style={{borderRadius: '50%'}}/>

                                <Stack>
                                    <Typography style={{fontFamily: 'Roboto', fontSize: '22px', color: '#0a0a0a', fontWeight: '500'}}>{channelData?.title}</Typography>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Typography style={{fontFamily: 'Roboto', fontSize: '15px', color: '#333', fontWeight: '500'}}>{channelData?.username}</Typography>
                                        <Typography style={{fontFamily: 'Roboto', fontSize: '15px', color: '#333', fontWeight: '400'}}>{channelData?.stats?.subscribersText}</Typography>
                                        <Typography style={{fontFamily: 'Roboto', fontSize: '15px', color: '#333', fontWeight: '400'}}>{channelData?.stats?.videosText}</Typography>
                                    </Stack>
                                    <Typography mt='10px' style={{width: '70%', textAlign: 'justify', fontFamily: 'Roboto', fontSize: '13.5px', color: '#444', fontWeight: '400'}}>{channelData?.description.slice(0, 145)}</Typography>
                                </Stack>
                            </Stack>

                            <button style={{backgroundColor: '#151515', color: 'white', borderRadius: '50px', fontFamily: 'roboto', fontWeight: '500', fontSize: '14px', letterSpacing: '0px', padding: '9px 15px', marginTop: '15px'}}>Subscribe</button>
                        </Stack>
                        
                        {/* TAB BAR */}
                        <Box mt='20px' px='0px' pl='40px' style={{color: '#222'}}>
                            <TabContext value={tabIndex}>
                                <TabList textColor='inherit' onChange={tabChange}>
                                    <Tab className='tab' label='HOME' value='1'/>
                                    <Tab className='tab' label='VIDEOS' value='2'/>
                                    <Tab className='tab' label='COMMUNITY' value='3'/>
                                    <Tab className='tab' label='ABOUT' value='4'/>
                                </TabList>

                                <TabPanel value='1'>
                                    <ChannelHome 
                                        id={videoData?.[0]?.video?.videoId}
                                        title={videoData?.[0]?.video?.title}
                                        published={videoData?.[0]?.video?.publishedTimeText}
                                        views={videoData?.[0]?.video?.stats?.views}
                                        videoData={videoData?.slice(selectRandomVideo, selectRandomVideo + 8)}
                                        // can send empty videoData but while using it use optional chaining
                                    />      
                                </TabPanel>

                                <TabPanel value='2'>
                                    {/* in order to pass use state as a prop need to pass with the same name is compulsary otherwise it gives undefined */}
                                    {videoData && <Videos videoData={videoData}/>}   
                                </TabPanel>

                                <TabPanel value='3'>
                                    <Community/>        
                                </TabPanel>

                                <TabPanel value='4'>
                                    <About 
                                        description={channelData?.description}
                                        location={channelData?.country}
                                        joinedDate={channelData?.joinedDateText}
                                        subscriber={channelData?.stats?.subscribersText}
                                        videos={channelData?.stats?.videos}
                                        views={channelData?.stats?.views}
                                        links={channelData?.links}
                                    />            
                                </TabPanel>

                            </TabContext>
                        </Box>
                    </Stack>
                </Box>

            </Stack>
        </>
    )
}

export default ChannelDetails
