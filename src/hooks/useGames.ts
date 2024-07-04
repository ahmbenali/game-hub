import { useEffect, useState } from 'react'
// instead axios one can use apiClient
import { CanceledError } from 'axios'
import { FetchGamesResponse, Game } from '~/types'
import axios from '../services/api-client'

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    console.log({isLoading})
    axios
      .get<FetchGamesResponse>('/games')
      .then(res => {
        setGames(res.data.results)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])


  return { games, error, isLoading }
}
