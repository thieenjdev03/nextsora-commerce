import { useEffect, useState } from 'react'
import { isAuthenticated } from '@/lib/auth'

interface AuthGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function AuthGuard({ children, fallback }: AuthGuardProps) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated()
      setIsAuth(authenticated)
      
      if (!authenticated) {
        // Redirect to login if not authenticated
        window.location.href = '/login'
      }
    }

    checkAuth()
  }, [])

  // Show loading while checking auth
  if (isAuth === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Show fallback if not authenticated
  if (!isAuth) {
    return fallback || null
  }

  // Show protected content if authenticated
  return <>{children}</>
}