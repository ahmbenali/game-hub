import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FormEvent, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

type Props = {
  onSearch: (searchText: string) => void
}
function SearchInput({ onSearch }: Props) {
  // simple form -> useRef is a better option as useState
  const inputRef = useRef<HTMLInputElement>(null) // always null as default value

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    if (inputRef.current) onSearch(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        width={{ base: '90%', md: '400px', lg: '500px', xl: '600px' }}
      >
        {/* <InputLeftElement pointerEvents="none" children="🔎" /> */}
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
