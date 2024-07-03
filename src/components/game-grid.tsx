import { useEffect, useState } from 'react'
// instead axios one can use apiClient
import { Text } from '@chakra-ui/react'
import { FetchGamesResponse, Game } from '../../types'
import axios from '../services/api-client'

function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get<FetchGamesResponse>('/xgames')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message))
  }, [])

  return (
    <>
      <Text>{error && <li>{error}</li>}</Text>
      <ul>
        {games.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
