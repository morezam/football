import { QueryFunctionContext } from 'react-query';
import football from '../api/football';
import { errorExist, errorMessage } from './errorHandle';

export const defaultQueryFn = async (context: QueryFunctionContext) => {
	const [, path, params] = context.queryKey as [
		string,
		string,
		{ [key: string]: string | number }
	];
	const res = await football.get(path, {
		params: { ...params },
	});

	if (errorExist(res.data.errors)) {
		const msg = errorMessage(res.data.errors);
		throw new Error(msg);
	}

	return res.data;
};
