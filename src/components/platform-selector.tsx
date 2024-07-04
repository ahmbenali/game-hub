import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/use-platform'

function PlatformSelector() {
  const { data: platforms, error, isLoading } = usePlatform()

  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Platform
      </MenuButton>
      <MenuList>
        {platforms.map(
          ({ id, name }) => <MenuItem key={id}>{name}</MenuItem>)
        }
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
