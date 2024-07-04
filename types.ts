type Game = {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
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
