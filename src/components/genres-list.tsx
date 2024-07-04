import useGenres from '../hooks/use-genres'

function GenresList() {
  // const { data } = useData<Genre>('/genres')
  const { data } = useGenres() // hide http-request from component

  return (
    <ul>
      {data.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}

export default GenresList
