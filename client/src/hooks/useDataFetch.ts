import { useState, useEffect, useCallback } from 'react';

/**
 * Standard error state interface
 */
export interface FetchError {
  message: string;
  status?: number;
  statusText?: string;
}

/**
 * Fetch state interface
 */
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: FetchError | null;
}

/**
 * Custom hook for standardized data fetching with consistent error handling
 *
 * Provides:
 * - Consistent loading, error, and data state management
 * - Automatic cleanup on unmount
 * - TypeScript safety
 * - Centralized error handling pattern
 *
 * @param url - The URL to fetch data from
 * @param options - Optional fetch options
 * @returns Object with data, loading state, error state, and refetch function
 *
 * @example
 * ```tsx
 * const { data, loading, error, refetch } = useDataFetch<CatalogData>('/catalog_data_v2.json');
 *
 * if (loading) return <LoadingSpinner />;
 * if (error) return <ErrorMessage error={error} />;
 * if (!data) return null;
 *
 * return <CatalogView data={data} />;
 * ```
 */
export function useDataFetch<T>(
  url: string,
  options?: RequestInit
): FetchState<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, options);

      if (!response.ok) {
        throw {
          message: `Failed to load data: ${response.statusText}`,
          status: response.status,
          statusText: response.statusText,
        } as FetchError;
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      // Handle both FetchError and generic errors
      if (err && typeof err === 'object' && 'message' in err) {
        setError(err as FetchError);
      } else if (err instanceof Error) {
        setError({
          message: err.message,
        });
      } else {
        setError({
          message: 'An unknown error occurred',
        });
      }
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}

/**
 * Hook for fetching multiple JSON files in parallel
 *
 * @param urls - Array of URLs to fetch
 * @returns Object with combined data, loading state, and error state
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useMultiDataFetch<LearnContent>([
 *   '/learn-mindset.json',
 *   '/learn-setup.json',
 * ]);
 * ```
 */
export function useMultiDataFetch<T>(
  urls: string[]
): FetchState<Record<string, T>> {
  const [data, setData] = useState<Record<string, T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        const results = await Promise.all(
          urls.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
              throw {
                message: `Failed to load ${url}: ${response.statusText}`,
                status: response.status,
                statusText: response.statusText,
              } as FetchError;
            }
            const jsonData = await response.json();
            // Extract filename as key (e.g., '/learn-mindset.json' → 'mindset')
            const key = url.split('/').pop()?.replace(/^learn-/, '').replace('.json', '') || url;
            return [key, jsonData];
          })
        );

        const dataMap = Object.fromEntries(results) as Record<string, T>;
        setData(dataMap);
      } catch (err) {
        if (err && typeof err === 'object' && 'message' in err) {
          setError(err as FetchError);
        } else if (err instanceof Error) {
          setError({
            message: err.message,
          });
        } else {
          setError({
            message: 'An unknown error occurred while fetching multiple files',
          });
        }
        console.error('Error fetching multiple data files:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [urls]);

  return {
    data,
    loading,
    error,
  };
}
