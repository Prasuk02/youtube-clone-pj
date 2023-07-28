import { Stack, Typography } from '@mui/material'
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom';

const CommentCard = ({avatar, channelId, title, content, published, replies, votes}) => {
  return (
    <>
        <Stack direction='row' spacing={2} alignItems='flex-start' mt='22px'>
            <img src={avatar} alt="" width='40px' height='40px' style={{borderRadius: '50%'}}/>

            <Stack>
                <Stack direction='row' spacing={2} alignItems='center'>
                    <Link to={`/channel/${channelId}`} style={{textDecoration: 'none'}}>
                        <Typography style={{fontFamily: 'roboto', fontWeight: '500', fontSize: '13.5px', color: '#0a0a0a'}}>{title}</Typography>
                    </Link>
                    <Typography style={{fontFamily: 'roboto', fontWeight: '400', fontSize: '13px', color: '#333'}}>{published}</Typography>
                </Stack>

                <Typography mt="3px" style={{fontFamily: 'roboto', fontWeight: '400', fontSize: '14px'}}>{content}</Typography>

                <Stack mt='2px' direction='row' alignItems="center" spacing={1} style={{width: 'min-content', backgroundColor: 'transparent', padding: '6px 10px'}}>
                    <ThumbUpOutlinedIcon style={{color: '#2d2d2d', fontSize: '21px'}}/>
                    <Typography style={{color: '#2d2d2d', fontSize: '14px', fontWeight: '500'}}>{votes >= 1000? `${(votes/1000).toFixed(1)}K` : votes}</Typography>
                    <Divider orientation="vertical" flexItem/>
                    <ThumbDownOutlinedIcon style={{color: '#2d2d2d', fontSize: '21px'}}/>
                </Stack>
            </Stack>
        </Stack>
    </>
  )
}

export default CommentCard
