import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

function GameCardContainer({ children }: PropsWithChildren) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      // width={{ base: '100%', md: '300px' }}
      width='100%'
    >
      {children}
    </Box>
  )
}

export default GameCardContainer
