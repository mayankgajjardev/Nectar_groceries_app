// import axios, {
// 	AxiosInstance,
// 	AxiosRequestConfig,
// 	AxiosResponse,
// 	CancelTokenSource,
// } from "axios";
// import axiosRetry from "axios-retry";
// import { useState, useCallback, useMemo, useRef } from "react";
// import AppConstants from "../constants/AppConstants";

// const cache = new Map();
// const buildCacheKey = (url, params) => `${url}:${JSON.stringify(params || {})}`;

// // Axios Instance
// const api = axios.create({ baseURL: AppConstants.testBaseUrl });

// // Retry logic
// axiosRetry(api, {
// 	retries: 3,
// 	retryDelay: axiosRetry.exponentialDelay,
// 	retryCondition: (err) =>
// 		axiosRetry.isNetworkOrIdempotentRequestError(err) ||
// 		axiosRetry.isRetryableError(err),
// });

// // Logging Interceptors
// api.interceptors.request.use((config) => {
// 	console.log(
// 		"[Request]",
// 		config.method?.toUpperCase(),
// 		config.url,
// 		config.params || {},
// 		config.data || {}
// 	);
// 	return config;
// });

// api.interceptors.response.use(
// 	(response) => {
// 		console.log(
// 			"[Response]",
// 			response.status,
// 			response.config.url,
// 			response.data
// 		);
// 		return response;
// 	},
// 	(error) => {
// 		console.error("[Error]", error.message);
// 		return Promise.reject(error);
// 	}
// );

// // async function refreshAccessToken(): Promise<string | null> {
// //   try {
// //     const refreshToken = await SecureStore.getItemAsync('refreshToken');
// //     if (!refreshToken) return null;

// //     const response = await axios.post(`${AppConstants.testBaseUrl}/auth/refresh`, {
// //       refreshToken,
// //     });

// //     const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
// //     await SecureStore.setItemAsync('accessToken', newAccessToken);
// //     if (newRefreshToken) {
// //       await SecureStore.setItemAsync('refreshToken', newRefreshToken);
// //     }
// //     return newAccessToken;
// //   } catch (error) {
// //     console.error('Token refresh failed', error);
// //     return null;
// //   }
// // }

// export function useApi({
// 	endpoint,
// 	method = HttpMethod.GET,
// 	queryParams,
// 	body,
// 	headers = {},
// 	useCache = false,
// 	invalidateCache = false,
// }) {
// 	const [data, setData] = (useState < T) | (null > null);
// 	const [error, setError] = (useState < string) | (null > null);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const cancelTokenRef = (useRef < CancelTokenSource) | (null > null);

// 	const cacheKey = useMemo(
// 		() => buildCacheKey(endpoint, queryParams),
// 		[endpoint, queryParams]
// 	);

// 	const cancel = () => {
// 		if (cancelTokenRef.current) {
// 			cancelTokenRef.current.cancel("Request cancelled");
// 		}
// 	};

// 	const request = useCallback(async () => {
// 		setIsLoading(true);
// 		setError(null);

// 		if (invalidateCache) cache.delete(cacheKey);
// 		if (useCache && cache.has(cacheKey)) {
// 			setData(cache.get(cacheKey));
// 			setIsLoading(false);
// 			return;
// 		}

// 		cancelTokenRef.current = axios.CancelToken.source();

// 		const config = {
// 			url: endpoint,
// 			method,
// 			params: queryParams,
// 			data: body,
// 			headers: {
// 				...headers,
// 			},
// 			cancelToken: cancelTokenRef.current.token,
// 		};

// 		try {
// 			const response = (await api.request) < T > config;
// 			setData(response.data);
// 			if (useCache) cache.set(cacheKey, response.data);
// 		} catch (err) {
// 			if (axios.isCancel(err)) {
// 				console.warn("Request cancelled:", err.message);
// 			} else {
// 				setError(err.response?.data?.message || err.message || "Unknown error");
// 			}
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	}, [
// 		endpoint,
// 		method,
// 		queryParams,
// 		body,
// 		headers,
// 		cacheKey,
// 		useCache,
// 		invalidateCache,
// 	]);

// 	return { data, error, isLoading, cancel, request };
// }
