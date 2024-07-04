import useGenres from '../hooks/use-genres'

function GenresList() {
  const { genres } = useGenres()

  return (
    <ul>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}

export default GenresList
