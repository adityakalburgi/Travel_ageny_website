import React, { Suspense } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Loading from '../Loading/Loading'

const LazyWrapper = ({ 
  children, 
  fallback = null, 
  loadingText = 'Loading...',
  loadingSize = 'medium',
  errorMessage = null 
}) => {
  const defaultFallback = fallback || (
    <Loading 
      text={loadingText} 
      size={loadingSize}
    />
  )

  return (
    <ErrorBoundary fallbackMessage={errorMessage}>
      <Suspense fallback={defaultFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default LazyWrapper
