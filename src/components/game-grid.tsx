
import { Text } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'


function GameGrid() {
  const { games, error } = useGames()
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
