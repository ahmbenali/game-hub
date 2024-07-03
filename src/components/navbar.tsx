import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

function Navbar() {
  return (
    <HStack>
      <Image boxSize='60px' src={logo} alt="logo" />
      <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar