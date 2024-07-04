import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '~/types'
import PlatformIconList from './platform-icon-list'

function GameCard({ game }: { game: Game }) {
  const { name, background_image, parent_platforms } = game

  return (
    <Card
      borderRadius={10}
      overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <PlatformIconList
          platforms={parent_platforms?.map(p => p.platform)}
        />
        <Heading fontSize="2xl">{name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
