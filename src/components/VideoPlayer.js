import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareIcon from '@mui/icons-material/Share';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom';

const VideoPlayer = ({id, channelId, title, superTitle, channel, avatar, subscriber, description, publishedDate, comments, likes, views}) => {
    let descriptionArr = description?.split('\n')
    // console.log(descriptionArr)

    // const show = () => {
    //     let description = document.getElementsByClassName('desc')
    //     let expand = document.getElementsByClassName('expand')
    //     if(expand.innerText === 'Show more'){
    //         // description.style.maxHeight = 'none'
    //         expand.innerText = 'Show less'
    //     }
    //     else{
    //         // description.style.maxHeight = '45px'
    //         expand.innerText = 'Show more'
    //     }
    // }
    return(
        <>
            <Stack>
                <Box width='100%' height='480px' style={{backgroundColor: 'black'}}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='100%'/>
                </Box>

                <Typography style={{fontFamily: 'roboto', fontWeight: '500', fontSize: '19px', marginTop: '15px'}}>{title}</Typography>


                {/* NAME, LIKES, SHARE BUTTONS */}
                <Stack direction='row' alignItems='center' justifyContent='space-between' mt='5px'>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <img src={avatar} alt="" style={{borderRadius: '50%', width: '40px'}}/>

                        <Stack>
                            <Link to={`/channel/${channelId}`} style={{textDecoration: 'none', color: '#080808'}}>
                                <Typography style={{fontFamily: 'roboto', fontWeight: '500', fontSize: '15.5px'}}>{channel}</Typography>
                            </Link>
                            <Typography style={{fontFamily: 'roboto', fontWeight: '400', fontSize: '12.5px', color: '#444'}}>{subscriber}</Typography>
                        </Stack>

                        <button style={{marginLeft: '25px', backgroundColor: '#151515', color: 'white', borderRadius: '50px', fontFamily: 'roboto', fontWeight: '500', fontSize: '13.5px', letterSpacing: '1px', padding: '9px 12px'}}>Subscribe</button>
                    </Stack>
                    <Stack direction='row' alignItems="center" spacing={1}>
                        <Stack direction='row' alignItems="center" spacing={1} style={{backgroundColor: '#eee', padding: '8px 12px', borderRadius: '15px'}}>
                            <ThumbUpOutlinedIcon style={{color: '#1f1f1f', fontSize: '21px'}}/>
                            <Typography style={{color: '#1f1f1f', fontSize: '14px', fontWeight: '500'}}>{likes >= 1000000? `${(likes/1000000).toFixed(1)}M` : likes >= 1000? `${(likes/1000).toFixed(1)}K` : likes}</Typography>
                            <Divider orientation="vertical" flexItem/>
                            <ThumbDownOutlinedIcon style={{color: '#1f1f1f', fontSize: '21px'}}/>
                        </Stack>
                        <Stack direction='row' alignItems="center" spacing={1} style={{backgroundColor: '#eee', padding: '8px 12px', borderRadius: '15px'}}>
                            <ShareIcon style={{color: '#1f1f1f', fontSize: '21px'}}/> 
                            <Typography style={{color: '#1f1f1f', fontSize: '14px', fontWeight: '500'}}>Share</Typography>
                        </Stack>
                        <Stack direction='row' alignItems="center" spacing={1} style={{backgroundColor: '#eee', padding: '8px 12px', borderRadius: '15px'}}>
                            <FileDownloadOutlinedIcon style={{color: '#1f1f1f', fontSize: '21px'}}/> 
                            <Typography style={{color: '#1f1f1f', fontSize: '14px', fontWeight: '500'}}>Download</Typography>
                        </Stack>
                        <button><MoreHorizSharpIcon/></button>
                    </Stack>
                </Stack>

                {/* DESCRIPTION BOX */}
                <Box mt='15px' style={{backgroundColor: '#eee', padding: '15px', borderRadius: '10px'}}>
                    <Stack direction='row' alignItems='center' spacing={1.5} mb='0px'>
                        <Typography style={{fontSize: '14.3px', fontFamily: 'Roboto', fontWeight: '500'}}>{views >= 1000000? `${(views/1000000).toFixed(1)}M views` : views >= 1000? `${(views/1000).toFixed(1)}K views` : `${views} views`}</Typography>
                        <Typography style={{fontSize: '14.3px', fontFamily: 'Roboto', fontWeight: '500'}}>{publishedDate}</Typography>
                        <Typography style={{fontSize: '14.3px', fontFamily: 'Roboto', fontWeight: '500', color: '#2a2a2a'}}>{superTitle}</Typography>
                    </Stack>

                    <Box className='desc' style={{ maxHeight: '64px', overflow: 'hidden'}}>
                        {descriptionArr?.map((line) => {
                            return(
                                <Typography style={{fontSize: '13.5px', fontFamily: 'Roboto', fontWeight: '400'}}>{line}</Typography>
                            );
                        })}
                    </Box>

                    <button className='expand' style={{padding: '0px', fontSize: '14.5px', fontFamily: 'Roboto', fontWeight: '500'}}>Show more</button>
                </Box>
            </Stack>
        </>
    )
}

export default VideoPlayer