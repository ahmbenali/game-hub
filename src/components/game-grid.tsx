import { SimpleGrid, Text } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'
import GameCard from './game-card'
import GameCardSkeleton from './game-card-skeleton'

function GameGrid() {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5]

  if (isLoading) return skeletons.map(_ => <GameCardSkeleton key={_} />)

  if (error) return <Text>{error}</Text>

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        p={5}
      >
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
