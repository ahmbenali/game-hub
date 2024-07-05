import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ThemeToggler from './them-toggler'

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
      <ThemeToggler />
    </HStack>
  )
}

export default Navbar
