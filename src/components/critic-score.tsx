import { Badge } from '@chakra-ui/react'

function CriticScore({ score }: { score: number }) {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

  return (
    <Badge
      px={2}
      borderRadius={4}
      fontSize={14}
      colorScheme={color}
    >
      {score}
    </Badge>
  )
}

export default CriticScore
