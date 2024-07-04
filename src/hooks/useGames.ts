import { useEffect, useState } from 'react'
// instead axios one can use apiClient
import { CanceledError } from 'axios'
import { FetchGamesResponse, Game } from '~/types'
import axios from '../services/api-client'

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    axios
      .get<FetchGamesResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })

    return () => controller.abort()
  }, [])


  return { games, error }
}
