import React from 'react'
import { useState, useEffect, createContext} from 'react'
import { FetchDataOptionsV2, fetchData } from '../utils/FetchData'

export const Context = createContext()

const ContextApi = (props) => {
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('home')
    const [searchResult, setSearchResult] = useState([])
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        const fetchingData = async() => {
            setLoading(true)
            const fetchedData = await fetchData(`https://youtube-v2.p.rapidapi.com/search/?query=${category}`, FetchDataOptionsV2)
            setSearchResult(fetchedData.videos)
            //useState will not be consoled properly in useEffect as seting useState value takes time, thats why gives undefined error
            setLoading(false)
        }

        fetchingData()
    }, [category])
    console.log(searchResult)
    return(
        <>
            {/* If values are more than one {{ }} is used */}
            <Context.Provider value={{
                loading, 
                setLoading,
                searchResult, 
                setSearchResult,
                category, 
                setCategory,
                mobileMenu, 
                setMobileMenu
            }}>
                {props.children}
            </Context.Provider>
        </>
    )
}

export default ContextApi