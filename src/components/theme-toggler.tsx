import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

function ThemeToggler() {
  const { colorMode: theme, toggleColorMode: toggleTheme } = useColorMode()

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={theme === 'dark'}
        onChange={toggleTheme}
        pl="2"
      />
      <Text
        whiteSpace="nowrap"
        display={{ base: 'none', md: 'block' }}
      >
        Dark Mode
      </Text>
    </HStack>
  )
}

export default ThemeToggler
