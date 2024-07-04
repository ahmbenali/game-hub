import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react'
import { Genre } from '~/types'
import useGenres from '../hooks/use-genres'
import { getCroppedImageUrl } from '../services/image-url'

type Props = {
  onSelectGenre: (genre: Genre) => void
}

function GenresList({ onSelectGenre }: Props) {
  // const { data } = useData<Genre>('/genres')
  // hide http-request from component
  const { data: genres, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />
  if (error) return null

  return (
    <List>
      {genres.map(genre => {
        const { id, name, image_background } = genre
        return (
          <ListItem
            key={id}
            py="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(image_background)!}
                alt={name}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                whiteSpace="normal"
                textAlign="left"
                fontSize="md"
                variant="link"
                color={{}}
                _hover={{
                  color: 'gray.600',
                  textDecoration: 'underline',
                }}>
                {name}
              </Button>
            </HStack>
          </ListItem>
        )
      })}
    </List>
  )
}

export default GenresList
