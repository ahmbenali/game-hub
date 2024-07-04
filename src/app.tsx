import { Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/game-grid'
import GenresList from './components/genres-list'
import Navbar from './components/navbar'

function App() {
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
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
