import { Heading } from '@chakra-ui/react'
import { GameQuery } from '~/types'

type Props = {
  gameQuery: GameQuery
}

function GameHeading({ gameQuery: { genre, platform } }: Props) {
  // games
  // action games
  // xbox games
  // xbox action games
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`.trim()

  return (
    <Heading
      as="h1"
      my="5"
      fontSize="5xl"
    >
      {heading}
    </Heading>
  )
}

export default GameHeading
