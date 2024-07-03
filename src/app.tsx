import { Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/game-grid'
import Navbar from './components/navbar'

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // up to 1024px

    }} >
      <GridItem area='nav' >
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>Aside</GridItem>
      </Show>
      <GridItem area='main' >
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App