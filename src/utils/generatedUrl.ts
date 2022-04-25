import UrlPattern from 'url-pattern'

const generateUrl = (urlString: string, params = {}, query?: Record<string, unknown>): string => {
  const url = new UrlPattern(urlString).stringify(params)

  if (query && typeof query === 'object') {
    const queryString = Object.entries(query)
      .filter(([, val]) => {
        if (
          val === null ||
          val === undefined ||
          val === '' ||
          (Array.isArray(val) && val.length < 1)
        ) {
          return false
        }
        return true
      })
      .map(([key, val]) => `${key}=${encodeURIComponent(`${val}`)}`)
      .join('&')

    return `${url}?${queryString}`
  }

  return url
}

export default generateUrl
