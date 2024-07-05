// import { useEffect, useState } from 'react'
// import { CanceledError } from 'axios'
import genres from '../data/genres'
// import axios from '../services/api-client' // axios -> apiClient
// import useData from './use-data'
// since genres ara almost not mutable, we can convert it to static data -> no need for server requests

// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([])
//   const [error, setError] = useState('')
//   const [isLoading, setLoading] = useState(false)

//   useEffect(() => {
//     const controller = new AbortController()

//     setLoading(true)
//     console.log({ isLoading })
//     axios
//       .get<FetchGamesResponse>('/genres')
//       .then(res => {
//         setGenres(res.data.results)
//       })
//       .catch(err => {
//         if (err instanceof CanceledError) return
//         setError(err.message)
//       })
//       .finally(() => setLoading(false))

//     return () => controller.abort()
//   }, [])

//   return { genres, error, isLoading }
// }

// const useGenres = () => useData<Genre>('/genres')

const useGenres = () => ({
  data: genres,
  error: null,
  isLoading: false,
})

export default useGenres
