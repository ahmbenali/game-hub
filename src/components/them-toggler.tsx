import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

function ThemeToggler() {
  const { colorMode: theme, toggleColorMode: toggleTheme } = useColorMode()

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ThemeToggler
