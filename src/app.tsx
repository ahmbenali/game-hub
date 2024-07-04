import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import { Genre } from '~/types'
import GameGrid from './components/game-grid'
import GenresList from './components/genres-list'
import Navbar from './components/navbar'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre)
  }


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // up to 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr', // first col takes 200px and the second takes the rest of the space
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          px={5}>
          <GenresList onSelectGenre={handleSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
