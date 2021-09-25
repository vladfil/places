import {QueryClient} from 'react-query'

export function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof Error
      ? error.toString().replace(/^Error:\s*/, '')
      : 'error connecting to server'

  alert(title)
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 60000,
      cacheTime: 90000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})
