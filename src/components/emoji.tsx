import { Box, Image, ImageProps } from '@chakra-ui/react'
import bullsEye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thumbsUp from '../assets/thumbs-up.webp'

function Emoji({ rating }: { rating: number }) {
  if (rating < 3) return null

  // create a map of emoji based on rating
  /*  const emojiMap = {
    3: '😭',
    4: '😄',
    5: '😍'
  } */

  const emojiMap: Record<number, ImageProps> = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  }

  return (
    <Box>
      <Image
        {...emojiMap[rating]}
        mt={1}
      />
      {/* <span>{emojiMap[rating]}</span> */}
    </Box>
  )
}

export default Emoji
