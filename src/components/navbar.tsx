import { Box, HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SearchInput from './search-input'
import ThemeToggler from './theme-toggler'

type Props = {
  onSearch: (searchText: string) => void
}

function Navbar({ onSearch }: Props) {
  return (
    <Box
      shadow={'sm'}
      dropShadow={'0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'}
      _dark={{
        shadow: 'dark-lg',
        dropShadow:
          '0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
      }}
    >
      <HStack
        mx="auto"
        mb="20px"
        justifyContent="center"
        p="10px"
        width={{ base: '100%', md: '600px', lg: '800px', xl: '1000px' }}
        gap={{ base: '30px', md: '100px' }}
      >
        <Image
          boxSize="50px"
          src={logo}
          alt="logo"
        />
        <SearchInput onSearch={onSearch} />
        <ThemeToggler />
      </HStack>
    </Box>
  )
}

export default Navbar
