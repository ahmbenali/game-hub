import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '~/types'
import { getCroppedImageUrl } from '../services/image-url'
import CriticScore from './critic-score'
import Emoji from './emoji'
import PlatformIconList from './platform-icon-list'

function GameCard({ game }: { game: Game }) {
  const { name, background_image, parent_platforms, metacritic, rating_top } =
    game

  return (
    <Card>
      {/* <Image src={background_image} /> */}
      <Image src={getCroppedImageUrl(background_image)!} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={parent_platforms?.map(p => p.platform)}
          />
          <CriticScore score={metacritic!} />
        </HStack>
        <Heading
          fontSize="2xl"
          mt={2}
        >
          {name}
          <Emoji rating={rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
