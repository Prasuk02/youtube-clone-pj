import { Box, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {categoryList, featureOptionList} from '../context/SidebarContent'
import { Link } from 'react-router-dom'
import '../components/Css/SidebarMenu.css'
import { Context } from '../context/ContextApi'
import { useNavigate } from 'react-router-dom'

const SidebarMenu = () => {
  const {setCategory, category} = useContext(Context)
  const navigate = useNavigate()

  const selectCategory = (name) => {
    setCategory(name)       //set value hone me time lagta hai, isliye next line pehle execute ho jaati hai isliye values function me console nahi karli chaiye values galat aati hai      
  }
  return (
    <>
      {/* {console.log(category)} */}
      {categoryList?.map((categ) => {
        return(
          // <Link to={`/searchResult/${category.name}`} style={{color: "#222", textDecoration: 'none'}}>
            <Box onClick={() => {
              selectCategory(categ.name)
              navigate('/')
            }} 
              className='categoryBox' width='100%' p='4.5px' pl='12px'
              style={{
                backgroundColor: categ.name == category? '#ddd' : '',
                borderRadius: '7px',
                border: '1px solid transparent'
              }}
              >
                <Stack direction='row' alignItems='center' spacing={3.5}>
                  <span>{categ.icon}</span>
                  <Typography style={{fontFamily: 'Roboto', fontSize: '14.4px', fontWeight: '400', textTransform: 'capitalize'}}>{categ.name}</Typography>
                </Stack>
            </Box>
          // </Link>
        )
      })}

      <Box style={{borderTop: '1px solid #bbb', width: '100%', margin: '11px 0px'}}></Box>

      {featureOptionList?.map((categ) => {
        return(
          // <Link to={`/searchResult/${category.name}`} style={{color: "#222", textDecoration: 'none'}}>
            <Box className='categoryBox' width='100%' p='4.5px' pl='12px'
              style={{
                // backgroundColor: categ.name == category? '#ddd' : '',
                borderRadius: '7px',
                border: '1px solid transparent'
              }}
              >
                <Stack direction='row' alignItems='center' spacing={3.5}>
                  <span>{categ.icon}</span>
                  <Typography style={{fontFamily: 'Roboto', fontSize: '14.4px', fontWeight: '400', textTransform: 'capitalize'}}>{categ.name}</Typography>
                </Stack>
            </Box>
          // </Link>
        )
      })}
    </>
  )
}

export default SidebarMenu
