import platforms from '../data/platforms'

// const usePlatform = () => useData<Platform>('/platforms/lists/parents')

const usePlatform = () => ({
  data: platforms,
  isLoading: false,
  error: null,
})

export default usePlatform
