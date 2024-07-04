import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '~/types'
import usePlatform from '../hooks/use-platform'

type Props = {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data: platforms, error, isLoading } = usePlatform()

  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms.map(platform => {
          const { id, name } = platform
          return (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={id}>
              {name}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
