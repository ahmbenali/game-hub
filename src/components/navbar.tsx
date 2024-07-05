import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SearchInput from './search-input'
import ThemeToggler from './theme-toggler'

function Navbar() {
  return (
    <HStack
      justifyContent="space-between"
      p="10px"
    >
      <Image
        boxSize="60px"
        src={logo}
        alt="logo"
      />

      <SearchInput />
      <ThemeToggler />
    </HStack>
  )
}

export default Navbar
