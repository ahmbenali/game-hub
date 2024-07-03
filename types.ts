type Game = {
  id: number
  name: string
}

type FetchGamesResponse = {
  count: number
  // next: string
  // previous: string
  results: Game[]
}

export type { FetchGamesResponse, Game }
