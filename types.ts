type Game = {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic?: number // rating score (0 - 100)
}

type FetchGamesResponse = {
  count: number
  // next: string
  // previous: string
  results: Game[]
}


type Platform = {
  id: number
  name: string
  slug: string
}

export type { FetchGamesResponse, Game, Platform }
