import { useEffect } from 'react'
import { profile } from '../data/profile.ts'

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} · ${profile.siteName}` : profile.siteName
  }, [page])
}
