import { Grid, GridItem, Show } from '@chakra-ui/react'
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
        <GridItem area='aside' bg='orange'>Aside</GridItem>
      </Show>
      <GridItem area='main' bg='blueviolet'>Main</GridItem>
    </Grid>
  )
}

export default App