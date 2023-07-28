export const FetchDataOptionsV1 = {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      // 'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
};

export const FetchDataOptionsV2 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_YOUTUBE_KEY,
    'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}
// export const fetchData = async(url, options) => {
//     const dataFetch = await fetch(url, options)
//     .then((response) => {
//         response.json()
//     })
//     .then((data) => {
//         return data
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }