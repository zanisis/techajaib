import { ajax } from 'rxjs/ajax'

import type { Endpoint } from 'constants/endpoint'

import generateUrl from './generatedUrl'

type Options = {
  endpoint: Endpoint
  params?: Record<string, unknown>
  query?: Record<string, unknown>
  body?: Record<string, unknown>
}

const HOST = 'https://randomuser.me'

const api = (options: Options) => {
  const { endpoint, params, query, body } = options
  const [method, path] = endpoint

  const patternURL = generateUrl(path, params, query)
  const url = `${HOST}${patternURL}`

  return ajax({
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export default api
