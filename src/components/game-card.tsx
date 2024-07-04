import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '~/types'
import { getCroppedImageUrl } from '../services/image-url'
import CriticScore from './critic-score'
import PlatformIconList from './platform-icon-list'

function GameCard({ game }: { game: Game }) {
  const { name, background_image, parent_platforms, metacritic } = game

  return (
    <Card
      borderRadius={10}
      overflow="hidden">
      {/* <Image src={background_image} /> */}
      <Image src={getCroppedImageUrl(background_image)!} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={parent_platforms?.map(p => p.platform)}
          />
          <CriticScore score={metacritic!} />
        </HStack>
        <Heading fontSize="2xl">{name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
