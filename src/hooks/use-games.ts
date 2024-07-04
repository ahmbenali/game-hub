// instead apiClient one can use apiClient
import { Game } from '~/types'
import useData from './use-data'

const useGames = () => useData<Game>('/games')



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
