import React, { useContext, useState , useEffect} from 'react'
import { Box, Stack, Typography, TextField } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../components/Css/header.css'
import {Context} from '../context/ContextApi'
import { useNavigate, Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {Avatar} from '@mui/material'
import { fetchData, FetchDataOptionsV1 } from '../utils/FetchData';
// import MenuIcon from '@mui/icons-material/Menu';
// import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
// import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {loading, mobileMenu, setMobileMenu} = useContext(Context)
    const navigate = useNavigate()

    const handleSearch = (event) => {
            setSearchQuery(event.target.value)
            // console.log(searchQuery)        // -> Not Working properly, access outside
    }

    const navigateSearchQuery = (event) => {
        if((event?.key === 'Enter') && (searchQuery?.length > 0)){
            navigate(`/searchResult/${searchQuery}`)
        }
    }

    const navigateSearchWithButton = () =>{
        if(searchQuery?.length > 0){
            navigate(`/searchResult/${searchQuery}`)
        }
    }

    const sideBarController = () => {
        setMobileMenu(!mobileMenu)
        console.log(mobileMenu)
    }
    return(
        <>
            <Box>
                {/* If loading is true execute <LinearProgress/> */}
                {loading && <LinearProgress/>}
            </Box>
            
            <Box width='100%' py="7px" px='12px' style={{position: 'sticky', top: '0px', left: '0px', backgroundColor: "#fff", zIndex: '100'}}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Stack direction='row' alignItems='center'>
                        {/* <MenuIcon style={{fontSize: '25px', marginRight: '22px'}}/> */}
                        <span onClick={sideBarController} className='menuIcon' style={{marginRight: '15px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="secondary" className="bi bi-list" viewBox="0 0 16 16">
                            <   path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </span>
                            <YouTubeIcon style={{color: '#ff0000', fontSize: '34px', marginRight: '-0.5px'}}/>
                        <Link to="/" style={{color: '#111', textDecoration: 'none'}}>
                            <Typography 
                                style={{
                                    color: '#2f2f2f',
                                    fontWeight: '600', 
                                    fontFamily: 'Oswald', 
                                    fontSize: '20.5px',
                                    letterSpacing: '-1.2px',
                                    position: 'relative'
                                }}>YouTube<sup style={{position: 'absolute', top: '-1.5px', right: '-15px', fontFamily: 'Dosis', fontWeight: '500', fontSize: '10px', letterSpacing: '1px', color: '#555'}}>IN</sup></Typography>
                                </Link>
                    </Stack>

                    <Stack direction='row' spacing={1.2} alignItems='flex-end' width='48%'>
                        <Box width="100%" style={{position: 'relative', border: '1px solid #bbb', borderRadius: '50px'}}>
                            <TextField onKeyDown={navigateSearchQuery} onChange={handleSearch} className='input' type='text' placeholder='Search' size='small' id="input-with-icon-textfield" 
                                sx={{border: 'none',"& fieldset": { border: 'none' },}}
                                style={{
                                    // border: '1px solid #bbb', 
                                    // borderRadius: '40px', 
                                    // padding: '10px 17px',
                                    fontSize: '16px',
                                    width: '100%'
                                }}/>
                            <Box onClick={navigateSearchWithButton} style={{position: 'absolute', top: '0px', right: '0px', padding: '8.5px', width: "10%", backgroundColor: '#F0F0F0', borderRadius: '0px 50px 50px 0px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{marginLeft: '14px'}}>
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </Box>
                        </Box>
                        <Typography><MicOutlinedIcon style={{fontSize: '25px'}}/></Typography>
                    </Stack>
                    
                    <Stack direction='row' spacing={1} alignItems='center' pr='24px'>
                        {/* <VideoCallOutlinedIcon style={{fontSize: '30px'}}/> */}
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                        </button>
                        {/* <NotificationsActiveOutlinedIcon style={{fontSize: '30px'}}/> */}
                        {/* <AccountCircleIcon style={{fontSize: '30px'}}/> */}
                        <span className='profile'>
                            <Avatar sx={{ bgcolor: '#7d57c1', width: '33px', height: '33px', fontSize: '16px' }}>P</Avatar>
                        </span>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default Header