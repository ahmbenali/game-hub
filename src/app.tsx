import { Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import { GameQuery } from '~/types'
import GameGrid from './components/game-grid'
import GenresList from './components/genres-list'
import Navbar from './components/navbar'
import PlatformSelector from './components/platform-selector'
import SortSelector from './components/sort-selector'

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // )

  // to avoid the ugly states -> apply query object pattern
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const { genre, platform } = gameQuery ?? {}
  const onSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText })
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
        <Navbar onSearch={onSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          px={5}
        >
          <GenresList
            selectedGenre={genre}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex
          gap={4}
          // spacing={5} -> used with HStack instead of Flex
          pl={2}
          mb={5}
        >
          <PlatformSelector
            selectedPlatform={platform}
            onSelectPlatform={platform =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectOrder={sortOrder =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid
          // selectedGenre={genre}
          // selectedPlatform={platform}
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  )
}

export default App
