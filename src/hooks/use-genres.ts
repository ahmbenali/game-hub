import { useEffect, useState } from 'react'
// instead axios one can use apiClient
import { CanceledError } from 'axios'
import { FetchGamesResponse, Genre } from '~/types'
import axios from '../services/api-client'

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    console.log({ isLoading })
    axios
      .get<FetchGamesResponse>('/genres')
      .then(res => {
        setGenres(res.data.results)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])


  return { genres, error, isLoading }
}

export default useGenres