import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/use-games'
import GameCard from './game-card'
import GameCardContainer from './game-card-container'
import GameCardSkeleton from './game-card-skeleton'

function GameGrid() {
  const { data: games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6, 7]

  if (error) return <Text>{error}</Text>

  console.log({ games })

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>

  /*     <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        p={5}
      >
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.map(game => (
          // <GameCardContainer key={game.id}>
          //   <GameCard game={game} />
          // </GameCardContainer>
          <li>{game.name}</li>
        ))}
      </SimpleGrid>
 */
  )
}

export default GameGrid
