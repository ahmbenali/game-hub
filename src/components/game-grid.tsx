import { SimpleGrid, Text } from '@chakra-ui/react'
import { GameQuery } from '~/types'
import useGames from '../hooks/use-games'
import GameCard from './game-card'
import GameCardContainer from './game-card-container'
import GameCardSkeleton from './game-card-skeleton'

type Props = {
  // selectedGenre: Genre | null
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
}
function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery)

  const skeletons = [1, 2, 3, 4, 5, 6, 7]

  const skeletonEls = skeletons.map(skeleton => (
    <GameCardContainer key={skeleton}>
      <GameCardSkeleton />
    </GameCardContainer>
  ))

  const gameEls = games.map(game => (
    <GameCardContainer key={game.id}>
      <GameCard game={game} />
    </GameCardContainer>
  ))

  if (error) return <Text>{error}</Text>

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={3}
    >
      {isLoading && skeletonEls}
      {gameEls}
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
