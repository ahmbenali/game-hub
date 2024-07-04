import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react'
import useGenres from '../hooks/use-genres'
import { getCroppedImageUrl } from '../services/image-url'

function GenresList() {
  // const { data } = useData<Genre>('/genres')
  const { data: genres } = useGenres() // hide http-request from component

  return (
    <List>
      {genres.map(({ id, name, image_background }) => (
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
              whiteSpace="normal"
              textAlign="left"
              fontSize="md"
              variant="link"
            >

              {name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenresList
