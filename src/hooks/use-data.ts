import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client'; // apiClient

type FetchResponse<T> = {
  count: number
  results: T[]
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then(res => {
        setData(res.data.results)
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort() // clean up
  }, [])

  return { data, error, isLoading }
}

export default useData
