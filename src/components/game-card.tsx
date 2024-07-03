import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../../types'

type Props = {
  game: Game
}

function GameCard({ game: { name, background_image } }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden" >
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
