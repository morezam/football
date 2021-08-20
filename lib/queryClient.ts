import { QueryClient } from 'react-query';
import { defaultQueryFn } from './defaultQueryFn';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryFn: defaultQueryFn,
			useErrorBoundary: true,
			retry: 2,
			retryDelay: 1000,
			refetchOnWindowFocus: false,
		},
	},
});
