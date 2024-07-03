import { SimpleGrid, Text } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'
import GameCard from './game-card'

function GameGrid() {
  const { games, error } = useGames()
  return (
    <>
      <Text>{error && <li>{error}</li>}</Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4} p={5}>
        {games.map(game => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
