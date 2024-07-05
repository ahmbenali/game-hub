// instead apiClient one can use apiClient
import { Game, GameQuery } from '~/types'
import useData from './use-data'

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
) => {
  const { genre, platform } = gameQuery
  const platformId = platform ? platform.id : null
  const genreId = genre ? genre.id : null

  return useData<Game>(
    '/games',
    {
      params: {
        // genres: selectedGenre?.id,
        // platforms: selectedPlatform?.id,
        genres: genreId,
        platforms: platformId,
      },
    },
    // [genreId, platformId]
    [gameQuery]
  )
}

// export const useGames = () => {
//   const [games, setGames] = useState<Game[]>([])
//   const [error, setError] = useState('')
//   const [isLoading, setLoading] = useState(false)

//   useEffect(() => {
//     const controller = new AbortController()

//     setLoading(true)
//     console.log({ isLoading })
//     apiClient
//       .get<FetchGamesResponse>('/games')
//       .then(res => {
//         setGames(res.data.results)
//       })
//       .catch(err => {
//         if (err instanceof CanceledError) return
//         setError(err.message)
//       })
//       .finally(() => setLoading(false))

//     return () => controller.abort()
//   }, [])

//   return { games, error, isLoading }
// }

export default useGames
