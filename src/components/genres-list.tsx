import {
  Button,
  Heading,
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
  selectedGenre: Genre | null
}

function GenresList({ selectedGenre, onSelectGenre }: Props) {
  // const { data } = useData<Genre>('/genres')
  // hide http-request from component
  const { data: genres, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />
  if (error) return null

  return (
    <>
      <Heading
        mb={3}
        fontSize="2xl"
      >
        Genres
      </Heading>
      <List spacing={3}>
        {genres.map(genre => {
          const { id, name, image_background } = genre
          return (
            <ListItem
              key={id}
              py="5px"
            >
              <HStack>
                <Image
                  src={getCroppedImageUrl(image_background)!}
                  alt={name}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover" // image will be scaled to fill the container while maintaining(preserving) its aspect ratio
                />
                <Button
                  onClick={() => onSelectGenre(genre)}
                  whiteSpace="normal"
                  textAlign="left"
                  fontSize="lg"
                  fontWeight={
                    genre.id === selectedGenre?.id ? 'bold' : 'normal'
                  }
                  variant="link"
                  color="gray.900" // {{}}
                  _dark={{
                    color:
                      genre.id === selectedGenre?.id ? 'white' : 'gray.400',
                    _hover: { color: 'white' },
                  }}
                  _hover={{
                    color: 'gray.900',
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                    transition: '0.2s',
                  }}
                >
                  {name}
                </Button>
              </HStack>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default GenresList
